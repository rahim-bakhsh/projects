const crypto = require("crypto");

// can handle the data up to 446Byte / 446 charcter

const rsaEncryption = (dataForEncryption) => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The length of RSA keys is 3072 bits by default one is 2048 bits
    modulusLength: 2048,
  });
  const encryptedData = crypto
    .publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      // Converting string to a buffer
      Buffer.from(dataForEncryption, "utf-8")
    )
    .toString("base64");

  const exportPublicKey = publicKey
    .export({
      type: "pkcs1",
      format: "pem",
    })
    .toString("utf-8");

  const exportPrivateKey = privateKey
    .export({
      type: "pkcs1", // 'spki,'pkcs8,ssh
      format: "pem", // pem , ssh , der
    })
    .toString("utf-8");

  return { encryptedData, exportPrivateKey, exportPublicKey };
};

const rsaDecryption = (encryptedData, privateKey) => {
  return crypto
    .privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        //same hasing fuction required
        oaepHash: "sha256",
      },
      Buffer.from(encryptedData, "base64")
    )
    .toString("utf-8");
};

module.exports = { rsaEncryption, rsaDecryption };
