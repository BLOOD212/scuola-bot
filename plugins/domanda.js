let handler = async (m, { conn, text, usedPrefix, command }) => {
    let idGruppo = '120363429634386701@g.us';

    let domanda = text ? text : (m.quoted && m.quoted.text ? m.quoted.text : null);

    if (!domanda) return m.reply(`❌ Inserisci la domanda da inviare.\n\nEsempio:\n${usedPrefix + command} Quando c'è la verifica di matematica?`);

    let testoDomanda = `❓ *NUOVA DOMANDA RICEVUTA*\n\n" ${domanda} "\n\n— *Inviata da:* @${m.sender.split('@')[0]}`;

    try {
        await conn.sendMessage(idGruppo, { text: testoDomanda, mentions: [m.sender] });
        await m.reply('✅ La tua domanda è stata inviata con successo nel gruppo!');
    } catch (e) {
        console.error(e);
        await m.reply('❌ Impossibile inviare la domanda nel gruppo.');
    }
};

handler.command = ['domanda'];

export default handler;
