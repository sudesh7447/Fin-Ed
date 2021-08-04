const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
 // story array it will be big
 // enter story objects
 story1 = {title:"Warren Buffet's Story"  , body:"Morbi hendrerit nunc gravida, pharetra eros a, pulvinar tortor. Sed posuere neque id laoreet rutrum. Cras non consequat nunc. Sed vulputate rutrum odio. Aliquam diam quam, bibendum non vestibulum at, feugiat non erat. Donec molestie purus diam, et ultrices lectus mollis a. Maecenas sodales eu leo sollicitudin mollis. Nunc ac mi ultrices, auctor nulla porta, aliquam sem. Sed quis ante dolor. Quisque mattis turpis mauris, blandit scelerisque ante auctor a. Suspendisse gravida luctus purus at tristique. Mauris in metus maximus, malesuada enim ac, hendrerit mi. Cras ac eros non dui placerat molestie sit amet id mi. Pellentesque sed urna dignissim, vehicula risus sit amet, tincidunt ex. Aliquam id egestas quam, quis egestas ex. Phasellus ac pellentesque est. " };


 // 
 var story = [story1];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/index.html" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/stories" , function(req,res){
  res.sendFile(__dirname+"\\story.html");
});
app.get("/education" , function(req,res){
  res.sendFile(__dirname+"\\education.html");
});
app.get("/stories/:topic",function(req,res){
var reqtitle =  _.lowerCase(req.params.topic);
let check = 0;
for(let i = 0;i<story.length;i++){
  var storetitle = _.lowerCase(story[i].title);
  console.log(storetitle);
  if(storetitle === reqtitle ){
    res.render("story1" , {Title:story[i].title , Text:story[i].body});
    check = 1;
  }
}
  if(check == 0){
    res.render("story1" , {Title: "404 not found" , body:"Go back to Home"});
  }


  console.log(req.params.topic);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
