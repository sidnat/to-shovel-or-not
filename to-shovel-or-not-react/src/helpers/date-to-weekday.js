export default function convertDateToWeekday(dateStr) {
  const splitDate = dateStr.split('/')
  const day = new Date(`${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`).getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[day]
}