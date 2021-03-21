const Discord = require("discord.js"),
client = new Discord.Client();
const ayar = require("../config");
const db = require("quick.db");


module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("developed by aias & where was i").setColor("RANDOM").setTimestamp();

if(!message.member.roles.cache.has(ayar.aboneyetkili)&& (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(embed.setDescription("Belirlenmiş Yetkiye Sahip Değilsiniz.")).then(x=> x.delete({timeout:5000}))
if(message.channel.id !== ayar.abonekanal) return message.channel.send(embed.setDescription(`<#${ayar.abonekanal}> Bu kanalda yapabilirsin.`)).then(x=> x.delete({timeout:5000}))
const member = message.mentions.members.first()  || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send("Birini etiketlemelisin.").then(x=> x.delete({timeout:5000}))
let yetkili = db.get(`yetkili_${message.author.id}.${message.guild.id}`)
let toplam = db.get(`toplam_${message.guild.id}`)
if(member.roles.cache.has(ayar.abonerol)) return message.channel.send("Bu kişide zaten abone rolü var").then(x=> x.delete({timeout:5000}))
member.roles.add(ayar.abonerol);
message.channel.send(embed.setDescription(`
<:skoll:823322265587286056>   ${member} Abone olduğunuz için teşekkür ederiz. 
<:sandik:823322229495431178>  <#${ayar.altyapıkanal}> Kanalından altyapılarımızı görebilirsiniz.
<:silah:823322325000650772>    ${message.author} Yetkilisinin toplam verdiği abone sayısı ${yetkili}
<a:siyahtac:823035315358662696>  Toplam verilen abone sayısı ${toplam}
`).setTitle("ARAMIZA HOŞGELDİN"))
db.add(`yetkili_${message.author.id}.${message.guild.id}` ,1)
db.add(`toplam_${message.guild.id}`,1)
member.roles.add(ayar.abonerol);







};

exports.config = {
  name: "abone",
  guildOnly: true,
  aliases: ['a'],
};