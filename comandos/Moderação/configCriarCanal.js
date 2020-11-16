 module.exports = {
  config: {
    nome: 'configCriarCanal',                                                   
    aliases: ['criarcanal', 'canal', 'channel'],                               
    descricao: 'Criações de canais.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },


run: async (client, message, args) => {
	if(!message.member.hasPermission('MANAGE_CHANNELS')) return
		if(!args[0]) return message.channel.send("🔗 **| Insira o nome do canal.**");

	message.guild.channels.create(args.slice(0).join(" "), {type: 'text'}) // 🔗 Text or voice
	message.channel.send("🎉 **| Criado com sucesso!**")
}
}