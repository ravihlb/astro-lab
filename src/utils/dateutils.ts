export function getDateString(dtstr: string): string {
  const dateObj = new Date(dtstr)
  return dateObj.toDateString()
}
