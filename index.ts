#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let condition = true;

while(condition){
const addVal = await inquirer.prompt(
    [
        {
            name:"addTo",
            type:"input",
            message:"What you want to add in your Todos ?"
        },
        {
            name:"addMore",
            type:"confirm",
            message:"Do You Want Add More?",
            default:"false"
        }
    ]
)

todoList.push(addVal.addTo);
condition=addVal.addMore;
}
console.log(`\n\t\t  ${chalk.bold.underline.yellowBright('Your Todo List')}\n`);
let num = 1;
for (const key in todoList) {
    console.log(`\t\t${chalk.bgWhite(" ")}  ${chalk.blackBright(num)} : ${chalk.bold.red(todoList[key])}`);   
    num++
}
console.log(`\n${chalk.green.italic.underline("\t   Thank You For Using Todo App  ")}`);
