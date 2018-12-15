const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','520562326676570112'];

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
  client.user.setGame(argresult, "https://www.twitch.tv/iitxbro");
  client.user.setStatus("dnd")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//iiHouSSaM#9494
        if (!developers.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === '18') {//iiHouSSaM#9494

  let channel = client.channels.get('520562326676570112');//iiHouSSaM#9494


  channel.join()//iiHouSSaM#9494
  .then(connection => console.log(`????`))//iiHouSSaM#9494
  .catch(console.error);//iiHouSSaM#9494
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
client.login(process.env.BOT_TOKEN);

