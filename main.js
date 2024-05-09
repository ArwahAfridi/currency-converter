#!/usr/bin/eve node
// import inquirer from "inquirer";
// // Define the list of currencies and their exchange rates
// let exchange_rate: any = {
//     "USD": 1, //Base currency
//     "EUR": 0.9, // European currency (Euro)
//     "JYP": 113, // Japenese currency (Yen)
//     "CAD": 1.3, // Canadian Dollar
//     "AUD":1.65, // Australian Dollar
//     "PKR": 280, // Pakistan Rupees
//     // add more currencies and their exchange rates here
// }
// //promt the user to select  currencies to convert  from and to
// let user_answer = await inquirer.prompt ([
//     {
//         name: "from currency",
//         type: "list",
//         message: "select the currency to convert from",
//         choices: ["USD", "JYP", "AUD", "CAD","PKR"]
//     },
//     {
//         name: "to_currency",
//         type: "list",
//         message: "select the currency to convert into:",
//         choices: ["USD", "JYP", "AUD", "CAD","PKR"]
//     },
//     {
//         name: "amount",
//         type: "input",
//         message: "Enter the amount to convert:"
//     }
// ]);
// //perform currency converter by using farmula
// let from_amount = exchange_rate[user_answer.from_currency];
// let to_amount = exchange_rate[user_answer.to_currency];
// let amount = user_answer.amount
// //farmula of conversion
// let base_amount = amount / from_amount
// let converted amount = base_amount *amount
// console.log('converted amount = ${converted_amount}');
import inquirer from "inquirer";
// Define the list of currencies and their exchange rates
const exchange_rate = {
    USD: 1, // Base currency
    EUR: 0.9, // European currency (Euro)
    JPY: 113, // Japanese currency (Yen)
    CAD: 1.3, // Canadian Dollar
    AUD: 1.65, // Australian Dollar
    PKR: 280, // Pakistan Rupees
    // add more currencies and their exchange rates here
};
async function main() {
    const userAnswer = await inquirer.prompt([
        {
            name: "fromCurrency",
            type: "list",
            message: "Select the currency to convert from:",
            choices: ["USD", "JPY", "AUD", "CAD", "PKR"],
        },
        {
            name: "toCurrency",
            type: "list",
            message: "Select the currency to convert into:",
            choices: ["USD", "JPY", "AUD", "CAD", "PKR"],
        },
        {
            name: "amount",
            type: "input",
            message: "Enter the amount to convert:",
        },
    ]);
    const fromAmount = exchange_rate[userAnswer.fromCurrency];
    const toAmount = exchange_rate[userAnswer.toCurrency];
    const amount = parseFloat(userAnswer.amount);
    const baseAmount = amount / fromAmount;
    const convertedAmount = baseAmount * toAmount;
    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${userAnswer.toCurrency}`);
}
main();
