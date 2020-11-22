const jwt = require('jsonwebtoken')

exports.verify = async function (req, res, next) {
    let accessToken = process.env.ACCESS_TOKEN
    console.log('in middleware', accessToken)
    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken) {
        console.log('hit here 1');
        return res.status(403).send()
    }

    let payload
    try {

        console.log('hit here 2');
        payload = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    }
    catch (e) {
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}