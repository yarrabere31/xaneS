const Discord = require('discord.js');
const client = new Discord.Client();
const economy = require('discord-eco');
const ayarlar = require("./ayarlar.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if(message.content === "--para") {
  economy.fetchBalance(message.author.id).then(i => {
  message.reply("paran: " + i.money + "TL")
  })
  }
  
  var d1 = Math.floor(Math.random() *7) + 8;
  var d2 = Math.floor(Math.random() *7) + 8;
  console.log(d1 + "," + d2)
  
  if(d1 === d2) {
  economy.updateBalance(message.author.id, d1).then(i => {
    message.reply(d1 + "TL kazandın!")
  })
  }
  

  
  if (message.content === 'Adem Can') {
    message.reply('Buyur Ben Yardımcı Olayım?');
  }
});

client.login(ayarlar.token);



