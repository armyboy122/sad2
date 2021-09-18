const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Bit? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Bit','')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Bit Bot to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=888334370727936020&permissions=36953152&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};