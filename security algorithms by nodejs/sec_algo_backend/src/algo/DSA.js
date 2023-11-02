const crypto = require("crypto");
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
  // modulusLength: 4096,
});

function dsaEncryption(data) {
  const encryptedData = crypto
    .privateEncrypt(privateKey, Buffer.from(data, "utf8"))
    .toString("base64");

  const exportPublicKey = publicKey.export({ type: "pkcs1", format: "pem" });

  return { encryptedData, exportPublicKey };
}

// create signature
const sign = (encryptedData) => {
  return crypto.sign("sha256", Buffer.from(encryptedData, "utf-8"), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  });
};

// verification
function dsaVerification(signature, encmsg) {
  try {
    return crypto.verify(
      "sha256",
      Buffer.from(encmsg, "utf-8"),
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      },
      signature
    );
  } catch (err) {
    return false;
  }
}

function dsaDecryption(encryptedData, key) {
  try {
    return (
      dsaVerification(sign(encryptedData), encryptedData) &&
      crypto
        .publicDecrypt(key, Buffer.from(encryptedData, "base64"))
        .toString("utf-8")
    );
  } catch (err) {
    return false;
  }
}


module.exports = {dsaDecryption, dsaEncryption, dsaVerification}
// const encmsg = dsaEncryption("mod").encryptedData;
// console.log(dsaDecryption(encmsg, publicKey, sign(encryptedData)));
