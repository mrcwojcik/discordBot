const Discord = require('discord.js');
var cron = require('node-cron');
const client = new Discord.Client();

require('dotenv').config({path: '.env'})
const express = require("express");
const app = express();
const http = require('http');
const fs = require('fs');

// Server listening //
app.use(express.static("public"));
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`*`);
}, 240000);

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const channel = client.channels.cache.get('681333001811918898');
    cron.schedule('1 16 * * 3,6', () => {
    channel.send('Hello @everyone. Today at 22TCT is our mandatory CHAIN. Get ready and ... see you!');
  });
  
  cron.schedule('1 18 * * *', () => {
    const month = new Date().getMonth();
    const day = new Date().getDate();
    
    if (month = 5){
      if (day = 28){
        channel.send('Little date test. If you seen it - it works :)')
      }
    }
    
  })
});


client.on('message', message => {
  if (!message.content.startsWith("!") || message.author.bot) return;
  const args = message.content.slice(1).split(/ +/);
  const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
  }
});

client.login(process.env.BOT_TOKEN);
