import { handleEmail } from './email.js'
import { handleCalendar } from './calendar.js'

export async function runAgent(message) {
  const intent = detectIntent(message)

  switch (intent) {
    case 'email':
      return handleEmail(message)
    case 'calendar':
      return handleCalendar(message)
    default:
      return "I can help with emails, calendar, and flights ✈️"
  }
}

function detectIntent(text) {
  text = text.toLowerCase()

  if (text.includes('email') || text.includes('inbox')) return 'email'
  if (text.includes('calendar') || text.includes('meeting')) return 'calendar'

  return 'unknown'
}
