const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','523208758797533184'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Rls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//iiHouSSaM#9494
        if (!developers.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === '45') {//iiHouSSaM#9494

//if (!channel) return generale.join() .then(connection => message.channel.send(` \` ** Done.:white_check_mark:  ** `));  

  let channel = client.channels.get('523208758797533184');//iiHouSSaM#9494


  channel.join()//iiHouSSaM#9494
  .then(connection => console.log(`????`))//iiHouSSaM#9494
  .catch(console.error);//iiHouSSaM#9494
  }
});
          
});
client.login(process.env.BOT_TOKEN);
