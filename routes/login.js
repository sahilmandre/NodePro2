const express = require('express')
const fs = require('fs');
const router = express.Router();



router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', function (req, res) {
    // const body = [];
    // req.on(body, chunk => {
    //     // console.log(chunk);
    //     body.push(chunk);
    // });
    // return req.on('end', () => {
    // const parsedBody = Buffer.concat(body).toString();
    // console.log(parsedBody)
    let username = (req.body.username);
    fs.writeFile('username.txt', username, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.send('Username: ${username}');
        // return res.end();
    });
    // })
});

module.exports = router;