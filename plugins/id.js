let handler = async (m) => {
    await m.reply(`*ID CHAT:* \n\`\`\`${m.chat}\`\`\``);
};

handler.command = ['id', 'jid'];

export default handler;
