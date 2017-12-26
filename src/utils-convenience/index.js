// Used in signIn and SignUp components
export const emailValidation = (email) => {
  const regExp = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i
  if (regExp.test(email)) return true
  return false
}

export const phoneValidation = (phone) => {
  const regExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  if (regExp.test(phone)) return true
  return false
}
