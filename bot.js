const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','523907230068899860'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('RRwt')) {
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
  client.user.setGame(argresult, "https://www.twitch.tv/iitxbro");
  client.user.setStatus("dnd")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('عع')) {
        message.channel.send(`  و ععليككم ألسلآآم و رححمة الله تعألى و بركآآتته · `)
        message.delete()
    }
    });
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('حح')) {
        message.channel.send(`بخخير نححمد آلله `)
        message.delete()
    }
    });
client.on('message', message => {
if(message.author.id !== '463698464845594628') return;
    if (message.content.startsWith('هه')) {
        message.channel.send(`ههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههـــ:Clapping_: 😂`)
        message.delete()
    }
    });
client.login(process.env.BOT_TOKEN);

