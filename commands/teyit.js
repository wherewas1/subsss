const Discord = require("discord.js"),
client = new Discord.Client();
const ayar = require("../config");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed().setFooter("developed by aias & where was i").setColor("RANDOM").setTimestamp();
if(!message.member.roles.cache.has(ayar.aboneyetkili)&& (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(embed.setDescription("Belirlenmiş Yetkiye Sahip Değilsiniz.")).then(x=> x.delete({timeout:5000}))
if(message.channel.id !== ayar.abonekanal) return message.channel.send(embed.setDescription(`<#${ayar.abonekanal}> Bu kanalda yapabilirsin.`)).then(x=> x.delete({timeout:5000}))
let teyit = db.fetch(`yetkili_${message.author.id}.${message.guild.id}`)
if(teyit === null) teyit = '0'
message.channel.send(embed.addField(`Abone rolü veren kişi:`,`${message.author}\nToplam:  ${teyit}`,true)



)





};

exports.config = {
  name: "teyit",
  guildOnly: true,
  aliases: [],
};