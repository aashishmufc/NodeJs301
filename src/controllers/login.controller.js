const jwt = require('jsonwebtoken')
const usersJson = require('../users.json');
exports.login = function (req, res) {
    return new Promise((resolve, reject) => {
        const listOfUsers = (usersJson);
        let username = req.body.username
        let password = req.body.password
        console.log('in controller', username, listOfUsers[username].password);
        if (!username || !password || listOfUsers[username].password !== password) {
            console.log('hit here &&&&&&&&&&&&&&');
            resolve({ "message": "User does not exist or password is incorrect" })
        }
        else {
            let payload = { username: username };
            console.log(payload, process.env.ACCESS_TOKEN_SECRET);
            let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                algorithm: "HS256",
                expiresIn: process.env.ACCESS_TOKEN_LIFE
            })
            console.log(accessToken);
            resolve({ token: accessToken });
        }
    })

}
