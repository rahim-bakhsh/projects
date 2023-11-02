const crypto = require("crypto")
/**
 * Encrypt 3DES using Node.js's crypto module *
 * @param data A utf8 string
 * @returns {encrypted data , key} are base64 string
 */
function encrypt3DES(data) {
  const key = crypto.randomBytes(24);
  const md5Key = crypto
    .createHash("md5")
    .update(key)
    .digest("hex")
    .substr(0, 24); // 24 byte key (24 char)
  const cipher = crypto.createCipheriv("des-ede3", md5Key, "");

  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  const finaleKey = key.toString("base64");
  return { encrypted, key };
}

/**
 * Decrypt 3DES using Node.js's crypto module
 * @param data a base64 string
 * @returns {*} a utf8 string
 */
function decrypt3DES(data, key) {
  try {
    let existingKey
    existingKey = Buffer.from(key, "base64");
    const md5Key = crypto
      .createHash("md5")
      .update(existingKey)
      .digest("hex")
      .substr(0, 24);

    const decipher = crypto.createDecipheriv("des-ede3", md5Key, "");
    let decrypted = decipher.update(data, "base64", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (err) {
    return false;
  }
}


module.exports = {decrypt3DES, encrypt3DES}