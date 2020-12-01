require('dotenv').config()
const {Telegraf} = require('telegraf')
// const bot = new Telegraf('1215425890:AAEfeo_5NbO9SoZTlOUwIBVkVk1lEJ5oIk8')

const Bot = new Telegraf(process.env.BOT_TOKEN)

Bot.start(async ctx=>{
    await ctx.reply('Hello')
})

Bot.hears('xyz', async ctx=>{
    await ctx.telegram.sendMessage(ctx.update.message.from.id, 'answer to xyz')
    // await ctx.reply(ctx.update.message.from.id, 'answer to xyz')
})

console.log('start bot')
Bot.launch()