#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';



const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,1000)});
};
//HEADING FUNCTION
async function welcome(){
    let title = chalkAnimation.neon("YOUR TODAY'S TASK TODO"); //start heading
    await sleep();
    title.stop();
}
await welcome();
//LISTING FUNCTION
async function listmaking(){
let tasks: string[] = [];
do{
var addTasks = await inquirer
  .prompt([
    {
        type: "input",
        name: "todo",
        message: "Write your todo>>>>",
    },
    {
        type: "confirm",
        name: "more",
        message: 'Do you want to add more?'
    }
])
sleep();
tasks.push(addTasks.todo)
}
while(addTasks.more == true)
return tasks;
}

// FUNCTION TO PRINT YOUR LIST
async function printList(){
sleep();
const yourTasks = await listmaking();

console.log("\n"+ chalk.blue("Your Tasks:"));
for(let i = 0; i <= yourTasks.length-1; i++ ){
    console.log("> " + chalk.red(yourTasks[i]));
}
}

await printList();
