module.exports = {
  config: {
    nome: 'clear',                                                   
    aliases: ['clear', 'cl', 'limpar'],                               
    descricao: 'Comando que limpa',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },

  run: async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('você não tem permissão , para executar esse comando, você precisa de permissão para `Gerenciar Mensagens`')
  if(!args[0]) return message.reply("informe um número de mensagens entre 2 e 100")
  if(args[0] > 100 && args[0] < 2) return mesage.reply("o número de mensagens deve ser maior que 2 e menor que 100!")
   
let del = args[0]

message.channel.bulkDelete(del)
 message.channel.send(`Foram limpas ${del} mensagens em ${message.channel.name} por ${message.author}`).then(async msg => {
msg.delete({timeout: 5 * 1000})
})
}
}