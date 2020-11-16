module.exports = {
  config: {
    nome: 'botPing',                                                   
    aliases: ['ping', 'ping', 'oing'],                               
    descricao: 'Comando que cumprimenta o usuário de volta.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms. A latência da API é ${Math.round(client.ws.ping)}ms`);
 }
}