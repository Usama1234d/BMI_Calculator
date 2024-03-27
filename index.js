#! /usr/bin/env node 
// Created BMI Calculator using Inquirer for Input, 
// conditional statements (if-else) to determine BMI ranges included chalk for highlighting 
import inquirer from "inquirer";
// Using Chalk Module
import chalk from "chalk";
// prompt user for weight
let weight_machine_kgs = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: "Enter your weight in Kilgorams:",
    },
]);
// prompt user for height
let height_in_meters = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: "Enter your height in meters:",
    },
]);
//  Calculate BMI using the formular BMI = WEIGHT / (HEIGHT *HEIGHT)
let BMI = weight_machine_kgs.weight /
    (height_in_meters.height * height_in_meters.height);
//Display the calculator BMI to the console
console.log(`Your BMI is ${BMI}`);
// Here are the ranges of BMI mesaurement based on body weight and height
if (BMI < 18.5) {
    console.log(chalk.green("Underweight : BMI less than 18.5"));
}
else if (BMI >= 18.5 && BMI < 25) {
    console.log(chalk.bgGreenBright("Normal Weight: BMI between 18.5 and 25"));
}
else if (BMI >= 25 && BMI < 30) {
    console.log(chalk.red("Overweight : BMI between 25 and 30"));
}
else if (BMI > 30) {
    console.log(chalk.bgRedBright("Obese : BMI 30 or greater"));
}
