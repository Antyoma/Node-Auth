const bcrypt = require('bcrypt');

async function hashPassword(){
    const myPassord = 'admin123 .202';
    const hash = await bcrypt.hash(myPassord, 10);
    console.log(hash);
}

hashPassword();