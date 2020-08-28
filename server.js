const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];
const port = 4000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    var today = new Date();

    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    var day = today.toLocaleDateString("en-GB", options);

    res.render("list", {kindOfDay:day, newListItem:items});
});

app.post("/", function(req, res){
   item = req.body.newItem;
   if (items.includes(item) === true) res.redirect("/");   
   else items.push(item);
   res.redirect("/");
});


app.listen(4000, function(){
    console.log("Server started on port 4000.");
});