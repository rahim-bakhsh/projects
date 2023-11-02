// crypto module
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const initVector = crypto.randomBytes(16); // generate 16 bytes of random data as IV

function aesEncryption(data) {
  const Securitykey = crypto.randomBytes(32); // generate 32 bytes of random data as secret key
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector); // the cipher function IV
  let encryptedData = cipher.update(data, "utf-8", "hex"); // encrypt the message
  encryptedData += cipher.final("hex"); // encrypt remained data and input encoding
  //   change data encoding from buffer to base64
  const exportInitVector = initVector.toString("base64");
  const exportSecurityKey = Securitykey.toString("base64");

  return { algorithm, exportSecurityKey, exportInitVector, encryptedData };
}

function aesDecryption(Securitykey, initVector, encryptedData) {
  try {
    // the decipher function
    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(Securitykey, "base64"),
      Buffer.from(initVector, "base64")
    );
    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
  } catch (err) {
    return false;
  }
}
// console.log(aesEncryption("mod"));
// orignal text == name
// console.log(
//   aesDecryption(
//     "aes-256-cbc",
//     "d2P4xPP5rBUjRKUQfXnMdyyaZfL6DQ0BCSix5JxizCA=",
//     "yszVZyGpu1yYTARZ75ltvA==",
//     "9e84c7a0b1bcaf8a4d942cb9360d502f"
//   )
// );

module.exports = { aesEncryption, aesDecryption };
