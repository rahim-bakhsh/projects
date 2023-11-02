function ceaserEncryption(str, shift) {
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) + shift;
    while (code > 999) {
      code = code - 999 + 96;
    }
    resultArray.push(String.fromCharCode(code));
  }
  return resultArray.join("");
}

function ceaserDecryption(str, shift) {
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) - shift;
    while (code > 999) {
      code = code - 999 + 96;
    }
    resultArray.push(String.fromCharCode(code));
  }
  return resultArray.join("");
}


module.exports = { ceaserDecryption, ceaserEncryption}