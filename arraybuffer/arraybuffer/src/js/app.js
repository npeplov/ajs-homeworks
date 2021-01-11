import getBuffer from './getbuffer.js';

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let str = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}
