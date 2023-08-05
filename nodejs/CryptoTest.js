let crypto = require("crypto");
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.HASH_SECRET;
const hash = (input) => {
    return crypto.createHmac("sha256", secret).update(input).digest("hex");
};

const AESEncrypt = (plainTxt) => {
    const algorithm = process.env.AES_ALGORITHM;
    const key = process.env.AES_KEY;
    const iv = process.env.AES_IV;
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plainTxt, "utf8", "base64");
    encrypted += cipher.final("base64");
    console.log(encrypted);
};

const AESDecrypt = (plainTxt, answer) => {
    const algorithm = process.env.AES_ALGORITHM;
    const key = process.env.AES_KEY;
    const iv = process.env.AES_IV;
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(plainTxt, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');

    if (decrypted === answer)
        console.log(true, "복호화 완료");
    else
        console.log(false, "복호화 실패");
    // console.log(decrypted);
};

console.log("1234 단방향 암호화")
console.log(hash("1234"));
console.log("-------------------------------------------\n\n");

console.log("핀테크 아카데미 암/복호화");
AESEncrypt("핀테크아카데미");
console.log("-------------------------------------------");
AESDecrypt("BHH3zWvc/D+AuxB1jGOZ8doMqLEcNk1KKUjYLZnZeHU=", "핀테크아카데미");
console.log("-------------------------------------------\n\n");

console.log("accessToken 암/복호화");
AESEncrypt(process.env.ACCESS_TOKEN);
console.log("-------------------------------------------");
AESDecrypt("Oc//x6KviGTY48VIIrc5hPnmxqh5mFNx0zJwxdn+v8JOzpmKJoeON9zfCKO+fiIyNKiOh8ZKgfbQhJOyCUyhmtmB2KNzsD6d9DvHqYt7niRP5VLqu/eEJ8+LkQSAsiS1TH7fSosOGyFmYH1Wrdqg1x/d2k35OCxFJxHmSuzdq9GJIFj20J3BkKrpPUGpbxX3F0z97dEVlLbMGDNnC7gMIdxZXplg3G1NaqCRKue9PRiLtbM+jLdM9SWPF2iMASph76AG2djjluF5VxSgl8LvJISm1TAblh5TneiXTyMBYV9CY5WZ8HyJwauQ8u+Yft5g4p5X7yFZ/Er5GJgXNDQF9+/DKLNsI+oVz7s4QJwZLuRdIN6XauoK14n3Xamy1lHm17J5cYwkUJK+s6cT0P7Sdg==", process.env.ACCESS_TOKEN);
console.log("-------------------------------------------\n\n");

console.log("userSeqNo 암/복호화");
AESEncrypt(process.env.USER_SEQ_NO);
console.log("-------------------------------------------");
AESDecrypt("llr0uwUSk0ciBcbqAjZIRQ==", process.env.USER_SEQ_NO);
console.log("-------------------------------------------\n\n");