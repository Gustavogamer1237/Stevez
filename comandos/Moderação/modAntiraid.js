 module.exports = {
  config: {
    nome: 'modAntiRaid',                                                   
    aliases: ['raid', 'at', 'antraid'],                               
    descricao: 'Comando que ativa a verificação no servidor.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {

  const guild = message.guild.id
  const emoji = message.guild.emojis.cache.find(e => e.name === "saiu")
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return 
    message.guild.setVerificationLevel(3)
    message.channel.send(`**<:${emoji.name}:${emoji.id}> | Proteção anti-raid ativada.**`).then(async msg => {
    msg.delete({timeout: 5 * 1000})
  })
  }
}