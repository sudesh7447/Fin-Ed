const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
 // story array it will be big
 // enter story objects
var story1 = {title:"Topic #1: Female Financial Empowerment"  , body:"

WHY IS FINANCIAL INDEPENDENCE FOR WOMEN IMPORTANT?


Oxford Dictionaries defines empowerment as ‘making (someone) stronger, more confident, especially in controlling their life and claiming their rights’.

There are several organizations, activists and campaigns like Going to School and Sarathi Development Foundation that advocate women empowerment and emphasize on self-reliance of women in our society. Other initiatives like Majlis Legal Center helps victims of violence access their legal rights and provides socio-economic support.

While these and other similar organizations have their own approach to empowerment, a critical common thread that lies at the core is financial independence.

Why financial independence?

As defined above, empowerment means giving someone the ability to “control their life and claim their rights”. Financial independence is not only a source of confidence but also gives women the credibility to participate in important matters of decision making, for themselves and their families.

This is relevant to both, women from low income communities, as well as women from affluent families, where making women financially independent is not considered a priority.

What happens when women are not financially independent?

When women earn for themselves, they are immediately more in control of their lives.

This is especially important for women who are live in abusive households. It has been reported that 70% women in India face some form of domestic violence. One such form of conducting this violence is by using ‘controlling behavior’ i.e., restricting access to financial resources. Hence, women who face abuse often have no option but to continue living in the same house with their abuser as they lack financial independence, which would otherwise enable them to have a choice.

When parents don’t think their daughters should be financially independent, they can choose to neglect their education. This translates into an extremely troubling statistic: in rural India, 1 girl out of 100 reaches grade 12.

What happens when women are financially independent?

Research shows that when women earn income they reinvest 90% of it into their families, as compared to only 30% to 40% for a man.

But, that’s not all. Having women participate in the workforce benefits India as a whole. At the launch of an initiative called W20, where women leaders from the world’s top 20 economies gathered, International Monetary Fund’s chief Christine Lagarde said, ‘India's GDP can expand by a whopping 27 % if the number of female workers increases to the same level as that of men’

Read about the empowered Indian woman here.

What can we as a society do?

Recent campaigns such as #Heforshe or the #ShareTheLoad that advocate gender equality are examples of changing ideologies. If reading this article has influenced your thinking, then speak to people around you and help them understand the importance of educating girls and giving them the choice to gain employment or become an entrepreneur.

We need independent and empowered women. Supporting women to be financially independent is a key step towards that. " };
var story2 = {title:"Topic #2: Saving Money" , body:"  You already know what saving money is but are you doing it?

A 2019 study from the Federal Reserve showed that 39% of Americans don’t have enough saved to cover a $400 emergency.

While most Americans can cover a $400 emergency, 39% is still a huge percentage of Americans that can face financial ruin if an unexpected expense comes their way.

This is why saving money is one of the most important financial literacy topics that you need to learn.

It is recommended to save at least 10% of your income and if you are able to save a higher percentage then go for it!

Also, you should have different savings accounts (or buckets) for different needs.

Here are some examples of different types of saving accounts or buckets you should have:

Core savings to hold your money securely
Emergency fund to cover any unexpected expenses life throws at you
Fund to save for a house
Fund to save for a car
There are many accounts/buckets you can use to save for different things and for each person this will be different so take some time to figure out what you are saving for and how much of your income you will allocate to each bucket.

P.S: A bucket in personal finance is simply a means of dividing up money into certain areas. Certain savings accounts let you have multiple buckets under one account so you can divide your savings into multiple categories.  "};
var story3 = {title:"Topic #3: Budgeting & Smart Spending" , body:" Along with saving money, budgeting and smart spending are very important when it comes to financial literacy.

One of the most important aspects of personal finance is knowing where you stand financially and you can’t do this if you aren’t tracking and budgeting.

First, you need to create a spreadsheet or table with two columns, one for income and one for expenses.

And… you guessed it! You will then list out all your means of income and then all the expenses you have (it’s best to do this as monthly income and expenses).

Obviously, your income should exceed your expenses, or else you are in big trouble but it’s best to have your income exceed your expenses by a wide margin.

This is where budgeting comes into play…

You want to start to set budgets for different expenses, for example, let’s say for food you will set a spending limit of $300 a month, for transportation $350, for fun $200, etc…

This is just an example but you get the point, try to lower your expenses as much as possible without lowering your quality of life.

What I mean is that you shouldn’t eat Ramen every day, three times a day, just to save money!

Save money and also live your life, this is what a budget is for.

There are many ways to create a budget, you can use Excel, Google Sheets, apps, pen and paper, etc…

So you can choose whatever fits you the best!

If you are not sure where to start then I recommend checking out Mint.

Mint is an app that tracks all of your income and spending for you automatically!

All you need to do is link your bank accounts to Mint and it does all the work for you (don’t worry it’s secure).

You will then see how much money you are making and all the expenses you have. Plus, you can see your investment accounts (if you have any) all on this one app!

However, Mint is not perfect, it sometimes categorizes purchases wrong and obviously, you will have to manually enter any income/spending done with cash.

So, some manual effort is needed but it’s a really great app overall to get a basic understanding of a budget.    "};
var story4 = {title:"Topic #4: Investing" , body:"   Now that you are saving more money and making more money you need to know what to do with it.

And…

One of the best ways to use your money is using it to make you more money through investing!

There are many types of investing you can do but the two most common and popular investments are stocks and real estate.

Real estate investing definitely requires a lot more work than investing in stocks but you can make a lot of money so just make sure you do your homework before jumping into real estate investing.

For investing in stocks, you can start immediately with little effort and I highly recommend doing this!

Historically, the stock market as a whole has continually increased and there is no indication that it will stop increasing.

So… this means that you can make money by simply investing in stocks!

Firstly, I recommend utilizing retirement plans such as a 401k, 403b, IRA, and Roth IRA. so you can take advantage of the tax benefits these plans offer.

Outside of retirement plans, you can set up other investment accounts that are labeled as taxable investment accounts since they do not have any tax benefits.

We recommend checking out Wealthfront and Vanguard to use for your taxable investment accounts. Both have low fees and you are able to invest in the entire stock market with ease!    "};
var story5 = {title:"Topic #5: Taxes" , body:" We all have to pay taxes, and it sucks to see a big chunk of your income go towards taxes, but there are certain things you can do to lower your taxable income.

One of the best ways to lower your taxable income is to utilize retirement accounts such as a 401k or IRA.

The money you deposit in a 401k or IRA will not be taxed but when you withdraw the money in retirement the money will be taxed but most likely at a lower tax rate.

Utilize an FSA, an FSA is a flexible savings account that you can fund with tax-free income to use for health-related expenses.

The downside is that if you don’t use the money in the FSA account by the end of the year you will most likely lose the balance left over.

If you want to use your money for a good cause then consider donating to charity, donations are tax-deductible which can reduce your taxable income. You can also donate items such as clothes, electronics, appliances, etc…

Utilize business expenses if you have a business or thinking about starting a business. Certain expenses can be deducted from taxes.

There are other ways to lower your taxable income, and it varies depending on your situation, so the last point I want to make is to invest in a good accountant.

A good accountant will help you to work with tax laws to reduce your taxable income.   "};
var story6 = {title:"Topic #6: Managing Debt" , body:"  One of the most common things that keep people from achieving financial freedom is debt.

If you don’t learn how to handle debt properly you can find yourself in a deep hole that is very hard to get out from!

Unfortunately, for many people, debt will be accumulated at some point in their lives. Whether it’s student loans, a mortgage, car loan, etc…

Of course, some debt is “better” than others, for example, the types of debt listed above are better to have than credit card debt.

Debt will cause you to pay more for the item/service in the long run due to interest so make an effort to pay off your debts as soon as possible!

Track every debt you have and start paying them down each month to save money in the long run   "};
var story7 = {title:"Topic #7: Utilizing Credit" , body:" We know it’s probably strange to follow up managing debt with utilizing credit but hear me out…

Building credit is very important especially at a young age.

This is because you will need a good credit score to get a mortgage, car loan, or a loan for anything else.

There are many “finance gurus” that claim debt is bad and you should only use cash instead of credit but this is not true.

Credit cards can be a useful tool that will help you build credit, offer certain purchase protections, get rewards, etc…

Obviously, you will need to pay off your credit card balance each month before you accrue interest.

I recommend using your credit card for small purchases periodically and paying it off before it accrues interest so you can build credit.

If you are looking for a good credit card to get then I recommend checking out the Chase Freedom Unlimited or the Chase Freedom Flex credit card.

Both credit cards have no annual fee, cashback on shopping, and 0% APR for the first 15 months!   "};
var story8 = {title:"Topic #8: Budgets Are $exy" , body:" How does becoming a millionaire and retiring early sound to you? 
Budgeting is important because, to be frank, money matters. Do you want that new game or a spring break trip? Well, you’re going need to know where your money is going, and the best way to do that is to make a budget. Budgets are not so much constraints, as they are guides for planning purchases and understanding your financial state.

A Budget simply maps income and expenses.
Most often this is done on a monthly interval as this provides a consistent, yet accurate description of actual income in comparison to expenses.

Income can either be in the form of a regular paycheck or spontaneous sources such as gifts or sales.

Regular expenses are also best understood on a monthly basis as this helps you stay in line with your budget


Often small expenses add up to a surprising figure. A budget allows you form an accurate awareness of your expenses and create a plan for your month’s expenses.
The apps below are tools that can be used to help plan for large purchases, or just getting a better understanding of where all that money went this month.

Mint: Mint is an app that helps people budget and stick to their budgets. It can also keep track of bills like for your credit card or your phone; it’s available on IOS and Android.

ToshL Finance: is similar to Mint, but is a separate app. It is also available on IOS and Android.

Cicmoney101.org: This budget making sheet goes really in depth with expenses, so if you’re living off campus, this will help with housing expenses.

Left to Spend: This is an IOS and Android app that allows the user to set the amount of money they can spend and then shows them how much they have left to spend within their budget.    "};
var story9 = {title:"Topic #9: Common financial mistakes college students make" , body:" The truth is, people love stories and often learn more from them than a lecture designed to do the same.

Highlighting common financial mistakes made by college students will be eye opening for many, and even more so when told in story form [3].

Learning from the mistakes of others is a lot easier than learning from our own and will introduce a more relaxed topic to a workshop that is likely to be a little heady. 
While college students may or may not tend to worry about their finances, financial foresight is always beneficial, especially for rainy days.
Advertisement

Updated: October 08, 2020 12:56 PM

For students or young professionals, one of the biggest financial mistakes is not adhering to a monthly budget.
RELATED NEWS
Realtors welcome UPRERA extension to realty projectsPartition of HUF under Hindu Law and Income Tax ActPSU general insurers employees go on strike to protest proposed privatisation
While college students may or may not tend to worry about their finances, financial foresight is always beneficial, especially for rainy days. Yet, there are some common money mistakes that most students make.

Here are 15 common ones to scrupulously avoid.

1.  High uncontrolled spending 
Overspending even when not necessary is the most common mistake among students. These could include purchasing designer clothes and premiums shoes or watches where a less-expensive brand may be equally good. Control the unbridled impulse for shopping by handling money prudently.

2.  Low savings and no emergency fund 
Typically, college students or young professionals may not develop the habit of saving some part of an allowance or salary. They keep spending as if there is no tomorrow. Saving some amount of money for an emergency fund provides a financial safety cushion and also creates room for discretionary spending later. Such as visiting an upmarket restaurant on special occasions.

3.  Lack of monthly budgeting 
For students or young professionals, one of the biggest financial mistakes is not adhering to a monthly budget. Simple things such as keeping limited cash in the wallet, utilising a credit card with discretion and using a digital expense manager or budget calculator can curb one’s urge to overspend.

4.  Not tracking spends
Keeping track of lessons and pending assignments helps a student in studying better. The same formula works for saving cash and controlling needless spending. Simple organizers and apps can help in tracking daily, weekly and monthly spends, which helps in managing money wisely. Students who spend without keeping track end up overspending without even realising this – until they run out of funds at the month-end.

5.  Misusing instant loan apps
Today, young professionals or even students have access to loans via instant loan apps that provide loans to new to credit borrowers without collateral. But many end up creating high debts as they use them unwisely. Repaying dues on time helps generate a good credit score, maintains one’s financial stability and keeps high interest charges in check.

6.  Mishandling education loans 
Opting for an education loan is often necessary to meet one’s tuition fees and academic expenses. But diverting such loans for partying or vacationing is a dangerous practice that can lead to a major cash crisis during the college term itself.

7.  Ignoring financial literacy 
Young students and professionals may mistakenly believe it is too early to worry about managing money. The truth is the faster the youth become financially literate, the better for them. Being aware of loan terms and various conditions in the fine print before signing on the dotted line helps in avoiding debt traps.

8.  Spending more on wants than needs 
Most young people fail to comprehend the difference between wants and needs. Consequently, they spend all their money on wants and do not have enough for their needs such as books, tuition fees and necessary travel or allied expenses. One could need a break but may desire a vacation. The first is genuinely needed, the second is discretionary and expensive. Understanding the difference is essential in developing healthy spending habits.

9.  Denting one’s credit score
Young borrowers must remember that repaying loans on time is a good practice that needs to be inculcated. Late payments can drastically impact a person’s credit score. Thereafter, borrowing may not be possible or only happen at higher interest rates. It is sensible to limit borrowings to the extent it can be repaid on time. For students and young professionals in India, it is advisable to choose reliable loan apps that offer instant cash loans with friendly repayment terms.

10.  Blindly following the herd
Sometimes, to keep up with their mates, college students and young professionals end up spending extravagantly. It is important to avoid peer pressure while shopping. Only spend as per monthly means and avoid competing with your friends. Financial prudence is crucial in money management.

11.  Not opting for scholarships 
If eligible, students should always apply for scholarships. These can take a tremendous burden off the shoulders of their parents and leave more room for spending on other necessities. Scholarships save students from the big burden of beginning their professional lives with a huge debt to repay.

12.  Missing free opportunities 
For college students and young professionals, discounts, perks and freebies are generally available. For example, campus gym membership, concessions on public transport or buying books at a discount on displaying a student ID can help save money each month. Corporates also offer perks to employees, which can be used to their advantage. But one must be aware and choose the same else the privilege goes waste.

13.  Making unsound investments 
Investing money in stocks based on “hot tips” can be a recipe for financial disaster. Avoid such misguided investments because there may be a vested interest in specific tips. Self-education and awareness are best when it comes to investing in shares. Regular research and study of specific sectors and companies are crucial before investing.

14.  Not saving on basics
Some students and young professionals can end up spending extravagantly on basics such as housing, completely forgetting cost-effective options such as on-campus accommodation or even a shared rental with friends or colleagues. By buying jointly with friends, money can even be saved through bulk-buying of books and other necessities.

15.  Overlooking cost-efficient activities
Some youngsters harbour a mistaken impression that all the good things in life cost more money. Not necessarily so. One could burn a hole in the pocket by spending a day at a fancy resort. Or enjoy a Sunday at minimal cost by going on a day-long hike with friends. The time spent on hobbies and outdoor activities in the company of friends can be truly priceless.

A proper understanding of the above will help students avoid money traps.  "};

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
