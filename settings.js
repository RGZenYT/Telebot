const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'W5wRQXwA5bUDt7E', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "5980570983:AAH0s-P0VUt6EMP-COOZqhQ6honM4DDaNCY" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "GalerikuBOT" //your bot name
global.OWNER_NAME = "Admin" //your name
global.OWNER_NUMBER = "6285954646535" //your telegram number
global.OWNER = ["https://t.me/Galeriku_Admin", "https://t.me/Galeriku_Admin"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
