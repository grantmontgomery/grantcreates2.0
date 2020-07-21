export function correctEmailFormat(email: string) {
  return email.includes("@") && email.includes(".") ? true : false
}
