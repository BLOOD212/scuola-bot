let handler = m => m;

handler.all = async function (m) {
    if (m.isGroup || m.fromMe) return;

    let messaggioAuto = "Benvenuto/a stai parlando col bot di assistenza di *MAREA GIOVANE* sviluppato da Antonino Finocchiaro 3I. Effettua la tua domanda con .domanda (testo), specifica nome cognome e classe";

    await this.sendMessage(m.chat, { text: messaggioAuto }, { quoted: m });
};

export default handler;
