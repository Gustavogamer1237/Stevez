 module.exports = {
  config: {
    nome: 'configDesligarProtecao',                                                   
    aliases: ['raidoff', 'atoff', 'antraidoff'],                               
    descricao: 'Comando que é anti-raid',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {
  const guild = message.guild.id
  const emoji = message.guild.emojis.cache.find(e => e.name === "saiu")
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return 


  message.guild.setVerificationLevel(2)
 message.channel.send(`<:${emoji.name}:${emoji.id}> | Segurança voltada ao normal.`).then(async msg => {
 msg.delete({timeout: 5 * 1000})
})
}
}