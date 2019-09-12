const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = [''];
const prefix = ['-'];


client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`Logged in as ${client.user.tag}!`);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + 345259413889744897 + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
		let spaces = " ".repeat(35);
		let last = "";
		let messages = 0;

		setInterval(() => {
			let str = "";
			let num = Math.floor(Math.random() * 35);
			for(let i = 0; i < num; i++) {
				str += letters[Math.floor(Math.random() * letters.length)];

				if(i === num - 1) {
					if(last === "") {
						messages += 1;
						last = `${str} ${spaces.slice(str.length + 1)}`;
						return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
					} else {
						messages += 1;
						let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
						last = spaced;
						return message.channel.send(spaced);
					}
				}
			}
		}, 40000);
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client.on('message', msg => {

  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;

  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
})


client2.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
		let spaces = " ".repeat(10);
		let last = "";
		let messages = 0;

		setInterval(() => {
			let str = "";
			let num = Math.floor(Math.random() * 10);
			for(let i = 0; i < num; i++) {
				str += letters[Math.floor(Math.random() * letters.length)];

				if(i === num - 1) {
					if(last === "") {
						messages += 1;
						last = `${str} ${spaces.slice(str.length + 1)}`;
						return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
					} else {
						messages += 1;
						let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
						last = spaced;
						return message.channel.send(spaced);
					}
				}
			}
		}, 40000);
}
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



client.login(process.env.TOKEN2);
client2.login(process.env.TOKEN2);
