const express = require('express')
var bodyParser = require('body-parser')


const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.use(loginRoutes);
app.use(userRoutes)


app.listen(port, () => console.log(`Example app listening on port port!`))
