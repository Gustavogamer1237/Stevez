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
  		const canal = message.mentions.channels.first();
        const aviso = args.slice(1).join(" ");
    
        if(!canal) return message.channel.send("Não foi possivel encontrar esse canal! Utilize: !say <#canal> <aviso>");
        if(!aviso) return message.channel.send("Utilize: !say <#canal> <aviso>");
    	canal.send("@everyone");
        let embed = new Discord.MessageEmbed()
        .setTitle("📌 Anúncio da Staff")
        .setColor("#ff1f1f")
        .setDescription(aviso)
        .setFooter(`Aviso enviado por ${message.author.tag}`, message.author.displayAvatarURL(), message.createdAt);
        
        canal.send(embed).then(m => m.react('🎉'))
  }
}