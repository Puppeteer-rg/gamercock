// I won't fucking do discord.jsv13 because it's ass
//also im not gonna organise my code because fuck you

const discord = require(`discord.js`)
const bot = new discord.Client()
const client = bot
bot.on(`ready`, () => {
    console.log(`It's gamerdoc here.`)
    setInterval(async ()=> {
        const guildz = bot.guilds.cache.get(`982316150035742741`)
        const Role = guildz.roles.cache.find(role => role.name == "L Bozo");
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
})
bot.on(`message`, (message) => {
    //ugh ugh ugh ugh
})

bot.login(``)
//add token

process.on('unhandledRejection', async (error) => {
    console.log(error)
  });
