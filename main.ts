#! usr/bin/env node

import inquirer from "inquirer"

let conversion = {
   "PKR" : {
      "USD": 0.0036,
      "GBP": 0.0028,
      "EUR": 0.0033,
      "AUD": 0.0055,
      "PKR": 1
  },
    "GBP" : {
        "USD": 1.26,
        "PKR": 351.44,
        "EUR": 1.17 ,
        "AUD": 1.93,
        "GBP": 1
  }, 
    "USD" : {
        "PKR": 277.90 ,
        "GBP": 0.79 ,
        "EUR": 0.92,
        "AUD": 1.52,
        "USD":1
  },
    "EUR" : {
        "PKR": 300.96,
        "USD": 1.08 ,
        "GBP": 0.86,
        "AUD": 1.65,
        "EUR" : 1
  },
    "AUD" : {
        "PKR": 182.34,
        "USD": 0.66,
        "GBP": 0.52,
        "EUR": 0.61,
        "AUD": 1
  },
};

const answer:{
    from: "PKR" | "USD" | "AUD" | "GBP" | "EUR" ,
    to: "PKR" | "USD" | "AUD" | "GBP" | "EUR" ,
    amount: number
} = await inquirer.prompt([
    {
        type : "list",
        name : "select",
        choices : ["PKR", "USD", "GBP", "EUR", "AUD"],
        message : "select your currency : "
    },
    {
        type : "list",
        name : "to",
        choices : ["PKR", "USD", "GBP", "EUR", "AUD"],
        message : "select your conversion currency : "
    },
    {
        type : "number",
        name : "amount",
        message : "enter your amount : "
    }
]);

const {from, to, amount} = answer;
if(from && to && amount) {
   let result = conversion[from][to] * amount ;
   console.log(`your conversion from ${from} to ${to} is ${answer}`)
}else{
    console.log("invalid inputs")
};


