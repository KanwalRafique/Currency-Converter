#! /usr/bin/env node
// "CURRENCY CONVERTER MACHINE" By Sir Okasha Tanoli 5-4-24

import inquirer from "inquirer";

const currency: any = {
    USD: 1, // $, ("base currency" As we don't know user's amount)
    EUR: 0.91,
    GBP: 0.76,
    IMR: 74.57,
    PKR: 280
};


let userAnswer = await inquirer.prompt([
    {
        name: `from`,
        message: "Enter from currency",
        type: `list`,
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"]

    },

    {   name: `to`,
        message: "Enter to currency",
        type: `list`,
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"]
    
},
{
        name: `amount`,
        message: "Enter your amount",
        type: `number`,
}

]);
let fromAmount = currency[userAnswer.from]
let toAmount = currency [userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount  // USD base currency
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);

console.log(fromAmount);
console.log(toAmount);
console.log(amount);        





