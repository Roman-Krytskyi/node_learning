const fs = require('fs/promises')
const path = require('path')


const boysDirPath = path.join(__dirname, 'boys')
const girlsDirPath = path.join(__dirname, 'girls')
const usersPath = path.join(__dirname, 'users')

fs.readdir(usersPath).then((users) => {
    users.forEach((user) => {
        const userPath = path.join(usersPath, user);
        return fs.readFile(userPath).then((data) => {
            userData = JSON.parse(data)
            if(userData.gender === "male") {
                return fs.rename(userPath, path.join(boysDirPath, user)).then()
            } else {
                return fs.rename(userPath, path.join(girlsDirPath, user)).then()
            }
        })
    })
})
