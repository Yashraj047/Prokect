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

/*
    // express ko import kar rahe hai, ye ek web framework hai Node.js ke liye
    // app banaya hai express ka instance, isse routes aur middleware set karenge
    const app = express();
    // path module import kiya hai, file path handle karne ke liye

    // express.json() middleware laga rahe hai, taaki json data ko parse kar sake
    app.use(express.json());
    // urlencoded data ko parse karne ke liye middleware laga rahe hai
    app.use(express.urlencoded({ extended: true }));

    // static files serve karne ke liye 'public' folder set kiya hai
    app.use(express.static(Path.join(__dirname, 'public')));
    // view engine set kar rahe hai 'ejs', taaki dynamic html render kar sake
    app.set('view engine', 'ejs');

    // home route banaya hai, jab koi '/' pe aayega toh 'index' render hoga
    app.get('/', function(req, res) {
        res.render("index");
    }); 

    // dynamic route banaya hai, yaha :name ka use kiya hai, jo bhi naam aayega usko greet karega
    app.get("/about/:name", function(req, res) {
        res.send(`Hello, ${req.params.name}! This is a dynamic route.`);
    });

    // ek aur dynamic route banaya hai, yaha :name aur :age dono ka use kiya hai, naam aur age dikhayega
    app.get("/about/:name/:age", function(req, res) {
        res.send(`Hi ${req.params.name}, You are ${req.params.age} years old.`);
    });

    // server ko 5000 port pe chalu kiya hai, aur console pe message print kar raha hai
    app.listen(5000, function() {
        console.log('Server Mast chal raha hai');
    });
*/