const {Telegraf} = require('telegraf')
const bot = new Telegraf('1215425890:AAEfeo_5NbO9SoZTlOUwIBVkVk1lEJ5oIk8')

bot.start(async ctx=>{
    await ctx.reply('Hello')
})

bot.hears('xyz', async ctx=>{
    await ctx.telegram.sendMessage(ctx.update.message.from.id, 'answer to xyz')
    // await ctx.reply(ctx.update.message.from.id, 'answer to xyz')
})
console.log('start bot')
bot.launch()