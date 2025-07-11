const express = require('express');
const app = express();
const Path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(Path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
}); 

app.get("/about/:name", function(req, res) {
    res.send(`Hello, ${req.params.name}! This is a dynamic route.`);
});

app.get("/about/:name/:age", function(req, res) {
    res.send(`Hi ${req.params.name}, You are ${req.params.age} years old.`);
});

app.listen(5000, function() {
    console.log('Server Mast chal raha hai on port 5000 XD...');
});


