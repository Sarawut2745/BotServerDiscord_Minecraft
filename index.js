const Discord = require('@n-h-n/discord.js-12.5.3')
const bot = new Discord.Client()
const config = require('./config.json')
const keepAilve = require("./server")
const prefix = config.prefix

bot.on('ready', () => {
  console.log('online!')
})

function ST(msg) {
  const axios = require('axios')
  axios.get('https://api.mcsrvstat.us/2/modva.ddns.net')
    .then(function(response) {
      var MinecraftST = response.data
      var MinecraftHO = response.data
      var MinecraftPO = response.data

      if (MinecraftST.online == false) {

        msg.reply('IP  | ' + MinecraftHO.hostname + ':' + MinecraftPO.port + '|  OFFLINE');
      }
      else
        msg.reply('IP  | ' + MinecraftHO.hostname + ':' + MinecraftPO.port + '|  ONLINE');

    })

}

bot.on('message', msg => {
  if (msg.content === prefix) {

    ST(msg)
  }

})

bot.login(config.token)