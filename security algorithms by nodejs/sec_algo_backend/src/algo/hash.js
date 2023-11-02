const crypto = require("crypto");

function hash(hashingSecret, plainText) {
  const hashedStr = crypto
    .createHmac("sha256", hashingSecret)
    .update(plainText)
    .digest("hex");

  console.log(hashedStr);
}

module.exports = { hash };
