module.exports = {
	name: 'egg',
	description: 'Egg',
	execute(message, args) {
    const eggs = ['https://i.imgur.com/DtC299h.jpg', 'https://i.imgur.com/30aqD3P.jpg', 'https://i.imgur.com/oprqQuP.png', 
                  'https://i.imgur.com/iJsqXtA.jpg', 'https://i.imgur.com/ZySAsqP.jpeg', 'https://i.imgur.com/RlGO2Tk.jpeg', 
                  'https://i.imgur.com/i6BYelp.jpg', 'https://i.imgur.com/YP7Lt5z.jpeg', 'https://i.imgur.com/DOUKuYc.jpeg']
    const randomEgg = eggs[Math.floor(Math.random() * eggs.length)];

    const { Client, MessageAttachment } = require('discord.js');
    const attachment = new MessageAttachment(randomEgg);
		message.channel.send('Egg!', attachment);
	},
};