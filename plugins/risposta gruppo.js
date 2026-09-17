let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : null;

    if (!who) return m.reply(`❌ Tagga l'utente o rispondi al suo messaggio.\n\nEsempio:\n${usedPrefix + command} @utente Ecco la tua risposta`);

    let messaggio = text.replace(/@\d+/g, '').trim();
    if (!messaggio && m.quoted) messaggio = m.quoted.text;
    if (!messaggio) return m.reply('❌ Inserisci il testo della risposta da inviare.');

    let testoPrivato = `📩 *Risposta ricevuta dal gruppo:*\n\n${messaggio}`;

    try {
        await conn.sendMessage(who, { text: testoPrivato });
        await m.reply('✅ Risposta inviata con successo in privato!');
    } catch (e) {
        console.error(e);
        await m.reply('❌ Impossibile inviare il messaggio in privato (l\'utente potrebbe aver bloccato il bot o non ha mai avviato una chat).');
    }
};

handler.command = ['risposta', 'rispondi'];
handler.group = true;

export default handler;
