export function formatHours(number: number) {
  if (number <= 1) {
    return number + "hr";
  } else {
    return number + "hrs";
  }
}