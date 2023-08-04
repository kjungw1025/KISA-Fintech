let crypto = require("crypto");

const secret = "abcdefg";
const hash = (input) => {
    crypto
        .createHmac("sha256", secret)
        .update("비밀번호1234")
        .digest("hex");
    console.log(hash);
};

const AESEncrypt = (plainTxt) => {
    const algorithm = "aes-256-cbc";
    const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
    const iv = "oNYgvfAAoAUb9mmD";
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plainTxt, "utf8", "base64");
    encrypted += cipher.final("base64");
    console.log(encrypted);
};

const AESDecrypt = (plainTxt) => {
    const algorithm = "aes-256-cbc";
    const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
    const iv = "oNYgvfAAoAUb9mmD";
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(plainTxt, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');

    console.log(decrypted);
};

AESEncrypt("핀테크아카데미");
console.log("-------------------------------------------");
AESDecrypt("BHH3zWvc/D+AuxB1jGOZ8doMqLEcNk1KKUjYLZnZeHU=");