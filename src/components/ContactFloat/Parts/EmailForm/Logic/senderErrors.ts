export function senderErrors(
  nameError: { error: boolean; message: string },
  emailError: { error: boolean; message: string },
  phoneError: { error: boolean; message: string }
) {
  return nameError.error || emailError.error || phoneError.error ? true : false
}
