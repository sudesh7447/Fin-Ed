const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
 // story array it will be big
 // enter story objects
var story1 = {title:" warren Buffet story" , body:"Warren Buffett Investor Warren Buffett, the Oracle of Omaha, is one of Graham’s most famous followers (and his remarkable track record, openly attributed to Graham's principles, has helped keep his mentor's name alive).2﻿ The one rule of Graham's that Buffett does not always follow is to diversify: He often prefers to concentrate investments in companies. After providing significant profits to his original partners, Buffett went public with the acquisition of Berkshire Hathaway Inc.(BRK-A) in late 1964, making it the holding company for his other investments.3﻿ A $1,000 investment in Berkshire Hathaway in 1964 is worth more than $20.6 million today, indicating an annual growth rate of close to 20% "};
var story2 = {title:"" , body:""};
var story3 = {title:"" , body:""};
var story4 = {title:"" , body:""};
var story5 = {title:"" , body:""};
var story6 = {title:"" , body:""};
var story7 = {title:"" , body:""};
var story8 = {title:"" , body:""};
var story9 = {title:"" , body:""};

 //
 var story = [story1];



 // education array
 var education1 = {title:"" , body:""};
 var education2 = {title:"" , body:""};
 var education3 = {title:"" , body:""};
 var education4= {title:"" , body:""};
 var education5 = {title:"" , body:""};
 var education6 = {title:"" , body:""};
 var education7= {title:"" , body:""};
 var education8 = {title:"" , body:""};
 var education9 = {title:"" , body:""};

  //
  var education = [education1];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/index.html" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/story.html" , function(req,res){
  res.sendFile(__dirname+"\\story.html");
});
app.get("/education.html" , function(req,res){
  res.sendFile(__dirname+"\\education.html");
});
app.get("/story.html/:topic",function(req,res){
var reqtitle =  _.lowerCase(req.params.topic);
let check = 0;
for(let i = 0;i<story.length;i++){
  var storetitle = _.lowerCase(story[i].title);
  console.log(storetitle);
  console.log(reqtitle);
  if(storetitle === reqtitle ){
    res.render("story1" , {Title:story[i].title , Text:story[i].body });
    check = 1;
  }
}
  if(check == 0){
    res.render("story1" , {Title: "404 not found" , Text:"Go back to Home"});
  }


  // console.log(req.params.topic);
});



app.get("/education.html/:topic",function(req,res){
var reqtitle =  _.lowerCase(req.params.topic);
let check = 0;
for(let i = 0;i<story.length;i++){
  var storetitle = _.lowerCase(story[i].title);
  console.log(storetitle);
  console.log(reqtitle);
  if(storetitle === reqtitle ){
    res.render("story1" , {Title:education[i].title , Text:education[i].body});
    check = 1;
  }
}
  if(check == 0){
    res.render("story1" , {Title: "404 not found" , Text:"Go back to Home"});
  }
  // console.log(req.params.topic);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
