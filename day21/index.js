const bcrypt = require('bcrypt')

const salt = 10

// const hash = bcrypt.hashSync('welcome',10)
const hash = bcrypt.hashSync('a',salt)
console.log(hash)

const status = bcrypt.compareSync('welcome', hash)
console.log(status)

const str = 'AbCd'
const pwd = str.toLowerCase()
console.log(pwd)

// this is entire logic for basic of bcrypt