// https://www.npmjs.com/package/jsonwebtoken
let jwt = require("jsonwebtoken");
let privateKey = "dkfkjaewlsdklfjsajkldf";
var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
jwt.sign(
  {
    userId: 1,
    userEmail: "skymill2000",
  },
  tokenKey,
  {
    expiresIn: "10d",
    issuer: "fintech.admin",
    subject: "user.login.info",
  },
  function (err, token) {
    console.log("로그인 성공\n"+token);
    res.json(token);
  }
);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InNreW1pbGwyMDAwIiwiaWF0IjoxNjkxMTE3MTQyLCJleHAiOjE2OTE5ODExNDIsImlzcyI6ImZpbnRlY2guYWRtaW4iLCJzdWIiOiJ1c2VyLmxvZ2luLmluZm8ifQ.65IOqbbrrHhgST6Aak58npYmg9rxELVfFV1_e-e4nrc";
jwt.verify(token, tokenKey, function (err, decoded) {
    // err
    // decoded undefined
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(decoded);
    }
});