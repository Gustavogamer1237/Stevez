module.exports = {
  config: {
    nome: 'modLock',                                                   
    aliases: ['lock', 'lc', 'lchat'],                               
    descricao: 'Comando que bloqueia o chat.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },

  run: async (client, message, args) => {
   let everyone = message.guild.roles.everyone;
  const emoji = message.guild.emojis.cache.find(e => e.name === "config")
  const emoji2 = message.guild.emojis.cache.find(e => e.name === "concluido")
  if (!message.member.hasPermission(`MANAGE_CHANNELS`)) return 

    // Realiza as funções depois do comando.
   message.channel.send(`<:${emoji.name}:${emoji.id}>** | Canal bloqueado por ${message.author}**`)
   message.react(`<:${emoji2.name}:${emoji2.id}>`)
   message.channel.overwritePermissions(everyone,[
  {
     deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
  },
]);
  }
}

