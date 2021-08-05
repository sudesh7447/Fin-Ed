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
 var education1 = {title:" Female Financial Empowerment   " , body:" WHY IS FINANCIAL INDEPENDENCE FOR WOMEN IMPORTANT? Oxford Dictionaries defines empowerment as ‘making (someone) stronger, more confident, especially in controlling their life and claiming their rights’. There are several organizations, activists and campaigns like Going to School and Sarathi Development Foundation that advocate women empowerment and emphasize on self-reliance of women in our society. Other initiatives like Majlis Legal Center helps victims of violence access their legal rights and provides socio-economic support. Empowerment means giving someone the ability to “control their life and claim their rights”. Financial independence is not only a source of confidence but also gives women the credibility to participate in important matters of decision making, for themselves and their families. We need independent and empowered women. Supporting women to be financially independent is a key step towards that.   "};
 var education2 = {title:" Saving Money " , body:"You already know what saving money is but are you doing it? A 2019 study from the Federal Reserve showed that 39% of Americans don’t have enough saved to cover a $400 emergency. While most Americans can cover a $400 emergency, 39% is still a huge percentage of Americans that can face financial ruin if an unexpected expense comes their way. This is why saving money is one of the most important financial literacy topics that you need to learn. It is recommended to save at least 10% of your income and if you are able to save a higher percentage then go for it!There are many accounts/buckets you can use to save for different things and for each person this will be different so take some time to figure out what you are saving for and how much of your income you will allocate to each bucket   "};
 var education3 = {title:" Budgeting & Smart Spending   " , body:" Along with saving money, budgeting and smart spending are very important when it comes to financial literacy. One of the most important aspects of personal finance is knowing where you stand financially and you can’t do this if you aren’t tracking and budgeting. First, you need to create a spreadsheet or table with two columns, one for income and one for expenses. And… you guessed it! You will then list out all your means of income and then all the expenses you have (it’s best to do this as monthly income and expenses). Obviously, your income should exceed your expenses, or else you are in big trouble but it’s best to have your income exceed your expenses by a wide margin.   "};
 var education4= {title:" Investing   " , body:" Now that you are saving more money and making more money you need to know what to do with it. And… One of the best ways to use your money is using it to make you more money through investing! There are many types of investing you can do but the two most common and popular investments are stocks and real estate. Real estate investing definitely requires a lot more work than investing in stocks but you can make a lot of money so just make sure you do your homework before jumping into real estate investing. For investing in stocks, you can start immediately with little effort and I highly recommend doing this!   "};
 var education5 = {title:"Taxes   " , body:"We all have to pay taxes, and it sucks to see a big chunk of your income go towards taxes, but there are certain things you can do to lower your taxable income. One of the best ways to lower your taxable income is to utilize retirement accounts such as a 401k or IRA. The money you deposit in a 401k or IRA will not be taxed but when you withdraw the money in retirement the money will be taxed but most likely at a lower tax rate. Utilize an FSA, an FSA is a flexible savings account that you can fund with tax-free income to use for health-related expenses. The downside is that if you don’t use the money in the FSA account by the end of the year you will most likely lose the balance left over. Utilize business expenses if you have a business or thinking about starting a business. Certain expenses can be deducted from taxes.   "};
 var education6 = {title:" Managing debt  " , body:"One of the most common things that keep people from achieving financial freedom is debt. If you don’t learn how to handle debt properly you can find yourself in a deep hole that is very hard to get out from! Unfortunately, for many people, debt will be accumulated at some point in their lives. Whether it’s student loans, a mortgage, car loan, etc… Of course, some debt is “better” than others, for example, the types of debt listed above are better to have than credit card debt. Debt will cause you to pay more for the item/service in the long run due to interest so make an effort to pay off your debts as soon as possible! Track every debt you have and start paying them down each month to save money in the long run!   "};
 var education7= {title:" Utilizing Credit  " , body:" I know it’s probably strange to follow up managing debt with utilizing credit but hear me out… Building credit is very important especially at a young age. This is because you will need a good credit score to get a mortgage, car loan, or a loan for anything else. There are many “finance gurus” that claim debt is bad and you should only use cash instead of credit but this is not true. Credit cards can be a useful tool that will help you build credit, offer certain purchase protections, get rewards, etc… Obviously, you will need to pay off your credit card balance each month before you accrue interest. I recommend using your credit card for small purchases periodically and paying it off before it accrues interest so you can build credit.   "};
 var education8 = {title:" Budgets Are $exy  " , body:"  How does becoming a millionaire and retiring early sound to you?  Budgeting is important because, to be frank, money matters. Do you want that new game or a spring break trip? Well, you’re going need to know where your money is going, and the best way to do that is to make a budget. Budgets are not so much constraints, as they are guides for planning purchases and understanding your financial state. A Budget simply maps income and expenses. Most often this is done on a monthly interval as this provides a consistent, yet accurate description of actual income in comparison to expenses. Income can either be in the form of a regular paycheck or spontaneous sources such as gifts or sales. Regular expenses are also best understood on a monthly basis as this helps you stay in line with your budget.  "};
 var education9 = {title:"Common financial mistakes college students make   " , body:" The truth is, people love stories and often learn more from them than a lecture designed to do the same. Learning from the mistakes of others is a lot easier than learning from our own and will introduce a more relaxed topic to a workshop that is likely to be a little heady. While college students may or may not tend to worry about their finances, financial foresight is always beneficial, especially for rainy days. For students or young professionals, one of the biggest financial mistakes is not adhering to a monthly budget. RELATED NEWS Realtors welcome UPRERA extension to realty projectsPartition of HUF under Hindu Law and Income Tax ActPSU general insurers employees go on strike to protest proposed privatisation While college students may or may not tend to worry about their finances, financial foresight is always beneficial, especially for rainy days. Yet, there are some common money mistakes that most students make. A proper understanding of the above will help students avoid money traps.    "};

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
