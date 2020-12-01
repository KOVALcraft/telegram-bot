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

Bot.command('xyz', async ctx=>{
    console.log('xyz command')
})

Bot.on('text', async ctx=>{
    await ctx.reply('это был текст')
})

Bot.on('photo', async ctx=>{
    await ctx.reply('это было фото')
})

Bot.on('document', async ctx=>{
    await ctx.reply('это было файл')
})

console.log('xyz command')
Bot.launch()