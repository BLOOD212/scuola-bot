let handler = async (m, { conn }) => {
    let testo = "Ecco il link per fare la tua domanda:\n\nhttps://chat.whatsapp.com/BvEtOXNfmAJGMffcJTao2x?s=cl&p=i&mlu=4&ilr=4";
    
    await conn.sendMessage(m.chat, { text: testo }, { quoted: m });
};

handler.command = ['domanda'];

export default handler;
