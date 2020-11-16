 module.exports = {
  config: {
    nome: 'staffAnuncios',                                                   
    aliases: ['anunciar', 'aviso', 'adv'],                               
    descricao: 'Avisos importantes.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {
  	const Discord = require ('discord.js');
  	if (!message.member.hasPermission("ADMINISTRATOR")) return
  		let canal = message.mentions.channels.first()
  		let avisoMensagem = args.slice(1).join(" ");
  	if(!avisoMensagem) return message.reply("Sem texto.");

  	let embed = new Discord.MessageEmbed()
  	.setTitle(`Anúncio - ${message.author.username}`)
  	.setColor('#ff1f1f')
  	.setFooter(`Desenvolvido por Byu#0001`, message.author.displayAvatarURL())
  	.setDescription(avisoMensagem)

  	canal.send(embed)

  }
}