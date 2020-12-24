export default class Validator {
  static validatePhone(phoneStr) {
    const phoneArr = phoneStr.match(/\d+/g);
    if (phoneArr[0] === '8') {
      phoneArr[0] = 7;
    }
    return `+${phoneArr.join('')}`;
  }
}
// ~60 min
