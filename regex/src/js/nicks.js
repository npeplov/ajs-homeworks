export default class Validator {
  static validateUsername(nick) {
    return /^[a-z][\w-]+[a-z]$/i.test(nick) && !/\d{3,}/.test(nick);
  }
}
// ~ 45 min