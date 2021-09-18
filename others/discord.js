const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "discord",
  aliases: ["inv"],
  description: "Join our Discord server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("It`s a server dedicated to Bit Bot")
      .setDescription("Love using Bit? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Bit','')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to join Bit Bot comunity`, 'https://discord.gg/VtnrjRuaB6', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};