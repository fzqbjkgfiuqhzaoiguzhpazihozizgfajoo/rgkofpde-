const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','523287498630365184'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Rwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/ii7m0dy");
  client.user.setStatus("dnd")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//-  AG              Ráááááz  , $!#8811 
        if (!developers.includes(message.author.id)) return;//-  AG              Ráááááz  , $!#8811 
  if (message.content === '88') {//-  AG              Ráááááz  , $!#8811 

  let channel = client.channels.get('520562326676570112');//-  AG              Ráááááz  , $!#8811 


  channel.join()//-  AG              Ráááááz  , $!#8811 
  .then(connection => console.log(`????`))//-  AG              Ráááááz  , $!#8811 
  .catch(console.error);//-  AG              Ráááááz  , $!#8811 
  }
});
          
});

client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('1')) {
        message.channel.send(`و عليككم ألسلآآم و رححمة آلله و بركآأتته ·`)
        message.delete()
    }
    });
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('2')) {
        message.channel.send(`هلآ`)
        message.delete()
    }
    });
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('3')) {
        message.channel.send(`بخير الحمدالله`)
        message.delete()
    }
    });
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('4')) {
        message.channel.send(`هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه`)
        message.delete()
    }
    });
client.login(process.env.BOT_TOKEN);

