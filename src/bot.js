import TelegramBot from 'node-telegram-bot-api'
import { runAgent } from './ai.js'

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true
})

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (!text) return

  const response = await runAgent(text)
  bot.sendMessage(chatId, response)
})

console.log('🤖 OPENDai Telegram bot active')
