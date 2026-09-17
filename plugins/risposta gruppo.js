let handler = async (m, { conn, text, usedPrefix, command }) => {
    let target = null;

    // 1. Controlla se il messaggio citato contiene il JID salvato (es. ID Utente: 39340...@s.whatsapp.net)
    if (m.quoted) {
        let textQuoted = m.quoted.text || '';
        let matchJid = textQuoted.match(/— \*ID Utente:\* (\d+@s\.whatsapp\.net)/);
        if (matchJid && matchJid[1]) {
            target = matchJid[1];
        } else if (m.quoted.mentionedJid && m.quoted.mentionedJid.length > 0) {
            target = m.quoted.mentionedJid[0];
        }
    }

    // 2. Se non stavi citando il messaggio ma hai menzionato un utente
    if (!target && m.mentionedJid && m.mentionedJid.length > 0) {
        target = m.mentionedJid[0];
    }

    if (!target) {
        return m.reply(`❌ *Come usare il comando:*\nRispondi direttamente al messaggio della domanda inviato dal bot scrivendo:\n\`${usedPrefix + command} Ecco la risposta...\``);
    }

    let messaggioRisposta = text.replace(/@\d+/g, '').trim();
    if (!messaggioRisposta) return m.reply('❌ Scrivi il testo della risposta.');

    let testoDaInviare = `📩 *RISPOSTA ALLA TUA DOMANDA*\n\n${messaggioRisposta}`;

    try {
        await conn.sendMessage(target, { text: testoDaInviare });
        await m.reply(`✅ Risposta inviata in privato a @${target.split('@')[0]}!`, null, { mentions: [target] });
    } catch (e) {
        console.error(e);
        await m.reply('❌ Impossibile inviare la risposta in privato.');
    }
};

handler.command = ['risposta', 'rispondi'];
handler.group = true;

export default handler;
