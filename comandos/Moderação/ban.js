 module.exports = {
  config: {
    nome: 'ban',                                                   
    aliases: ['ban', 'bn', 'ban'],                               
    descricao: 'Comando que bane usúarios do servidor.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },


run: async (client, message, args) => {
	const Discord = require('discord.js');
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // Mensagens
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Comando: ban")
        .setDescription(
          `**Descrição:** Bane um membro com o motivo. \n` +
            "**Examplos:** \n" +
            ";ban <@597253939469221891> raid \n" +
            ";ban save <@597253939469221891> spam "
        )
        .setColor("#ff1f1f");
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`Você não pode banir você mesmo.`)
        .setColor("#ff1f1f");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Coloque a razão.`)
        .setColor("#ff1f1f");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Eu não tenho permissão."
        )
        .setColor("#ff1f1f");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} foi banido do servidor pelo motivo: ${reason}`)
      .setColor("#ff1f1f");
  
    message.channel.send(successfullyembed);
  }
}
