// I won't fucking do discord.jsv13 because it's ass
//also im not gonna organise my code because fuck you

const discord = require(`discord.js`)
const bot = new discord.Client()
const client = bot

const guildId = `982316150035742741`
const chatName = `chat`
const roleName = `L Bozo`

bot.on(`ready`, () => {
    console.log(`It's gamerdoc here.`)

    //Bans if less than 2 mins
    setInterval(async ()=> {
        const guildz = bot.guilds.cache.get(guildId)
        const Role = guildz.roles.cache.find(role => role.name == roleName);
        const members = guildz.members.cache.filter(meber => meber.roles.cache.find(role => role === Role)).map(member => member)
        const members2 = guildz.members.cache.map(member => member)
        const diff = members2.filter(x => !members.includes(x))
        for(i=0; i < diff.length; i++) {
        const minsJoined = Math.floor((Math.abs(new Date() - diff[i].joinedAt)/1000)/60)
           if (minsJoined >= 2) {
            guildz.members.ban(diff[i])
            console.log(`banned ${diff[i].user.tag}`)
           }
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
    }, 20000) //2.3148e-8 is 2 days, if you want it to be shorter or longer then search miliseconds to days
    //also discord doesn't show u how long the channel was created.
})
bot.on(`message`, (message) => {
    //ugh ugh ugh ugh
})

bot.login(``)
//139.210.20.105

process.on('unhandledRejection', async (error) => {
    console.log(`There has been an error in my code!\n`)
    console.log(error)
});
