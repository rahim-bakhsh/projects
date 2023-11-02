const express = require("express");
const cors = require("cors");
// const { createConnection, EntityManager } = require("typeorm");
const User = require("./src/entities/user");

// const Sequelize = require("sequelize");
// const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());

const { ceaserEncryption, ceaserDecryption } = require("./src/algo/ceaser");
const { rsaEncryption, rsaDecryption } = require("./src/algo/RSA");
const { aesEncryption, aesDecryption } = require("./src/algo/AES");
const { encrypt3DES, decrypt3DES } = require("./src/algo/DES");
const { dsaEncryption, dsaDecryption } = require("./src/algo/DSA");

app.get("/", async (req, res) => {
  // const entityManager = req.container.get(EntityManager);
  // const user = new User();
  // user.username = "john";
  // user.password = "password";
  // await entityManager.save(user);
  // res.send("User saved");
  res.status(200).json({ success: false, message: "hello world!!!" });
});

//********** ceaser cipher **********//
// create a link
app.get("/ceaser", (req, res) => {
  res.status(200).json({ data: { ci: "", key: "" } });
});

app.post("/ceaser", (req, res) => {
  const { data, shift, isEncryptionProccess } = req.body;
  let result = null;
  if (isEncryptionProccess) {
    const cipher = ceaserEncryption(data, Number(shift));
    result = { ci: cipher, key: shift };
  } else {
    const decipher = ceaserDecryption(data, Number(shift));
    result = { deci: decipher, key: shift };
  }
  // Respond with the updated 'data' array
  return res.status(200).json({ data: result });
});
///////////////////////////////////////
//********** RSA Enc **********//
app.get("/rsa", (req, res) => {
  res
    .status(300)
    .json({ data: { ci: "", publicKey: "", privateKey: "", attension: "" } });
});
app.post("/rsa", (req, res) => {
  const { data, decryptKey, isEncryptionProccess } = req.body;
  let result = null;
  try {
    if (isEncryptionProccess) {
      const { encryptedData, exportPrivateKey, exportPublicKey } =
        rsaEncryption(data);
      result = {
        ci: encryptedData,
        // publicKey: exportPublicKey,
        privateKey: exportPrivateKey,
      };
    } else {
      result = { deci: rsaDecryption(data, decryptKey) };
    }
  } catch (err) {
    result = {
      attension: isEncryptionProccess
        ? "Dear user, Your data size is larger than key,please divide in many part and then then encrypt it OR directly use the AES encryption"
        : "Dear user, Your key or data may wrong",
    };
  }
  return res.status(300).json({
    data: result,
  });
});
///////////////////////////////////////
//********** AES Enc **********//
app.get("/aes", (req, res) => {
  res.status(200).json({
    data: { algorithm: "", securityKey: "", initVector: "", encryptedData: "" },
  });
});
app.post("/aes", (req, res) => {
  const { data, initVector, decryptKey, isEncryptionProccess } = req.body;
  let result = null;
  if (isEncryptionProccess) {
    const { algorithm, exportSecurityKey, exportInitVector, encryptedData } =
      aesEncryption(data);
    result = {
      algorithm,
      securityKey: exportSecurityKey,
      initVector: exportInitVector,
      encryptedData,
    };
  } else {
    result = { decryptedData: aesDecryption(decryptKey, initVector, data) };
  }

  res.status(200).json({
    data: result,
  });
});

///////////////////////////////////////
//********** DES Enc **********//
app.get("/des", (req, res) => {
  res.status(200).json({
    data: { key: "", encryptedData: "" },
  });
});
app.post("/des", (req, res) => {
  const { data, isEncryptionProccess, decryptKey } = req.body;
  let result = null;
  if (isEncryptionProccess) {
    const { key, encrypted } = encrypt3DES(data);
    result = { key: key, encryptedData: encrypted };
  } else {
    result = {
      decryptedData: decrypt3DES(data, decryptKey),
    };
  }
  res.status(200).json({
    data: result,
  });
});

///////////////////////////////////////
//********** DSA Enc **********//
app.get("/dsa", (req, res) => {
  res.status(200).json({
    data: {
      key: "",
      encryptedData: "",
      decryptedData: "",
    },
  });
});
app.post("/dsa", (req, res) => {
  const { data, decryptKey, isEncryptionProccess } = req.body;
  let re = null;
  if (isEncryptionProccess) {
    const { encryptedData, exportPublicKey } = dsaEncryption(data);
    re = { data: { key: exportPublicKey, encryptedData: encryptedData } };
  } else {
    re = { data: { decryptedData: dsaDecryption(data, decryptKey) } };
  }
  res.status(200).json(re);
});

///////////////////////////////////////
//********** login **********//
app.get("/login", (req, res) => {
  res.status(200).json({
    email: "",
    password: "",
  });
});

// app.post("/login", (req, res) => {
//   // ////////////////////////////

//   const sequelize = new Sequelize("new_algo", "rahim", "rahim", {
//     host: "localhost",
//     dialect: "postgres", // Use 'postgres' for PostgreSQL
//     define: {
//       timestamps: false, // Disable Sequelize's automatic timestamp columns
//     },
//   });

//   // Define a Sequelize model for your data
//   const User = sequelize.define("Users", {
//     email: Sequelize.STRING,
//     password: Sequelize.STRING,
//   });

//   const { email, password } = req.body;

//   // Create a new user record in the database
//   User.create({ email, password })
//     .then(() => {
//       console.log("succesfull ");
//       res.send("Data stored successfully.");
//     })
//     .catch((err) => {
//       console.error("Error:", err);
//       res.send("Error storing data.");
//     });

//   // /////////////
//   // const { email, password } = req.body;
//   // console.log(req.body);
//   // res.status(200).json({ email: "", password: "" });
// });

app.listen(3000, () => {
  console.log("server is ready on port 3000");
});

// createConnection()
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("server is ready on port 3000");
//     });
//   })
//   .catch((err) => {
//     console.log("error:", err.message);
//   });

// createConnection()
//   .then(async (connection) => {
//     // Your Express app code here

//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch((error) => console.log("TypeORM connection error: ", error));

// app.get('/users/:userId/:location', (req,res) => {
//     // get user id from request
//     const userId = req.params.userId
//     const location = req.params.location;
//     // get users info from database
//     const search = req.query.search;
//     const region = req.query.region;
//     res.status(200).json({success:true, data:{id:1, userId:userId, name:'shah berdi', location:location, search:search, region:region}})
// })
