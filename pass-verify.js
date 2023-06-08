const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassord = 'admin123 .202';
    const hash = '$2b$10$Z9JWPpQ0PMPvmJlQa0twMeYxATM4uVNIMexAAqrSj9x0kM/9haWXK';
    const isMatch = await bcrypt.compare(myPassord, hash);
    console.log(isMatch);
}

verifyPassword();