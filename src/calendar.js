export async function handleCalendar(command) {
  if (command.includes('schedule')) {
    return '📅 Meeting scheduled for next week.'
  }

  if (command.includes('cancel')) {
    return '❌ Event canceled.'
  }

  return '📆 Calendar command processed.'
}
