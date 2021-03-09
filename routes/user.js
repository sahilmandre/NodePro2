const express = require('express')
const fs = require('fs');
const router = express.Router();



router.get('/users', (req, res) => {
    //   res.render('users')
        try {  
            var data = fs.readFileSync('username.txt', 'utf8');
            console.log(data.toString());
            // username.push(chunk);
            res.send(data);
        
        
        } catch(e) {
            console.log('Error:', e.stack);
        };
        
       fs.readFile('username.txt', 'utf8', function(err, data) {
        // var msg = "";
            if(err) {
                console.log("first read returned error: ", err);
            }
            else {
                if (data === null) {
                    console.log("first read returned NULL data!");
                    return res.render('../views/login.ejs');
                }
                else if (data === "") {
                    console.log("first read returned EMPTY data!");
                    return res.render('../views/login.ejs');
                }
                else 
                    console.log("first read returned data: ", data);
            }
        });
        
    })


module.exports = router;
