const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4NjU5Njc0OX0.yoNhsnTgLSVcdAH8GVTwhVCuWDry42pdxQWi1cqMHzY';


function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);