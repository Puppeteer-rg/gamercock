// I won't fucking do discord.jsv13 because it's ass
//also im not gonna organise my code because fuck you


// Before you use this rename example.env to .env then put your bot token :) (remove the brackets u dumb fuck)

const discord = require(`discord.js`)
const bot = new discord.Client()
const client = bot
require("dotenv").config();

const guildId = `982316150035742741`
const chatName = `chat`
const days = 2
const minsToBan = 2
const ban = `Announcement`

bot.on(`ready`, () => {
    console.log(`It's gamerdoc here.`)

    //bans the announcement thingy
    setInterval(() => {
        const guildz = bot.guilds.cache.get(guildId)
        const nigs = guildz.members.cache.filter(e=> {if (!e.user.username.includes(ban) || e.user.bot) return;
        return e.user.id})
        guildz.members.ban(nigs);
    },1000)
    
    //Bans if less than 2 mins
    setInterval(async ()=> {
        var guildz = bot.guilds.cache.get(guildId)
        const Role = guildz.members.cache.map(e=> {return e._roles})
        const members = guildz.members.cache.map(e=> {return e})
        for (i=0; i < members.length; i++){
            if (Role[i].length === 0) {guildz.members.ban(members[i].user.id)
            console.log(`banned ${members[i].user.tag}`)}
        }
    }, 1000)

    //clones the chat and makes it again
    setInterval(()=> {
        const guildz = bot.guilds.cache.get(guildId)
        const channelNames = guildz.channels.cache.filter(e=> {
            if (!e.name.includes(`${chatName}-old-`)) return;
            return e.name;
        }).map(e=> {return e.name})
        if (channelNames[0] !== undefined) {
            const channelNum = parseFloat(channelNames[channelNames.length - 1].split(`-`)[2]) + 1
            const channel = guildz.channels.cache.find(e=> e.name == chatName)
            channel.overwritePermissions([{
                id: channel.guild.roles.cache.find(role => role.name === roleName).id,
                deny: ["VIEW_CHANNEL"]
            }])
            channel.setName(`${chatName}-old-${channelNum}`)
            channel.clone({name: chatName})
        }
        else {
            const channel = guildz.channels.cache.find(e=> e.name == chatName)
            channel.overwritePermissions([{
                id: channel.guild.roles.cache.find(role => role.name === roleName).id,
                deny: ["VIEW_CHANNEL"]
            }])
            channel.setName(`${chatName}-old-1`)
            channel.clone({name: chatName}) 
        }
    }, parseFloat(milToDays(days))) //2.3148e-8 is 2 days, if you want it to be shorter or longer then search miliseconds to days
    //also discord doesn't show u how long the channel was created.
})
bot.on(`message`, (message) => {
    //ugh ugh ugh ugh
})

bot.login(process.env.TOKEN)
//139.210.20.105

process.on('unhandledRejection', async (error) => {
    console.log(`There has been an error in my code!\n`)
    console.log(error)
});


function milToDays(days){
    return (days * 86400000)
}