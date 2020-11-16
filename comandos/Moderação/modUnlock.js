module.exports = {
  config: {
    nome: 'modUnlock',                                                   
    aliases: ['unlock', 'ulock', 'unchat'],                               
    descricao: 'Comando que desbloqueia o chat.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },

  run: async (client, message, args) => {
     let canal = message.mentions.channels.first()
   if(!canal) {
      return message.channel.send("Mencione o canal.")
    }
  const emoji = message.guild.emojis.cache.find(e => e.name === "config")
  const emoji2 = message.guild.emojis.cache.find(e => e.name === "concluido")
  if (!message.member.hasPermission(`MANAGE_CHANNELS`)) return 

    // Realiza as funções depois do comando.
   canal.send(`<:${emoji.name}:${emoji.id}>** | Canal desbloqueado por ${message.author}**`)
   message.react(`<:${emoji2.name}:${emoji2.id}>`)
   canal.updateOverwrite([
  {
     id: message.guild.id,
     true: ['SEND_MESSAGES'],
     deny: ['ADD_REACTIONS', 'MENTION_EVERYONE']
  },
]);
  }
}