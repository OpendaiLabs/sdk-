export async function handleEmail(command) {
  if (command.includes('summarize')) {
    return '📬 Inbox summary: 3 important emails, 12 newsletters.'
  }

  if (command.includes('reply')) {
    return '✉️ Drafted and sent your reply.'
  }

  return '📧 Email command received.'
}
