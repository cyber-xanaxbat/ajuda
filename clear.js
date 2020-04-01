const Discord = require('discord.js'); 

exports.run = (client, message, args) => { 
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`você precisa da permissão \`MANAGE_MESSAGES\`.`); // caso o autor não possua a permissão 'GERENCIAR_MENSAGENS', vamos avisar para ele
    let clean = args.slice(0).join(' '); 

    if (clean < 2 || clean > 100) return message.reply(`escreva um número de: \`2 à 100\`!`)
 
    if (args.length === 0) return message.reply(`escreva um número de: \`2 à 100\`!`) 
    try { 
        message.channel.bulkDelete(clean) 
        
        let embed = new Discord.RichEmbed()

        .setTitle(`LIMPEZA`)
        .setDescription(`Limpei um total de \`${clean}\` mensagens.`)
        .setColor('#0000')
        .setFooter(`Responsável: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){
        console.log(e); 
    }
}

exports.help = { 
    name: 'clear'
}
