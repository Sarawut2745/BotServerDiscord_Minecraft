const express = require('express');
const app = express();
const fs = require('fs')
app.listen(() => console.log('bakugo.'));
const { get } = require('snekfetch');
app.use('/', (req, res) => {
    res.send(new Date());
});
const man = require('express')
const ineed = man();
const axman = require('axios').default
ineed.listen(3000,()=>{
    console.log(`Server Started`);
})
ineed.get('/',(req,res)=>res.sendStatus(200))

setInterval(uptime,1000)
url="https://MinecraftServer.sarawutsangsuwa.repl.co"

function uptime() {
    axman.get(url).then(res=> {
        console.log(`working`)
    }).catch(Error=> {
        console.log(`error check bot`)
    })
}