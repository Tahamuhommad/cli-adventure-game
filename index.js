import chalk from 'chalk';
import inquirer from 'inquirer';
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel = 100;
        this.fuel = fuel;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel = 100;
        this.fuel = fuel;
    }
}
let player1 = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'please enter your name'
});
let opponent1 = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: 'please select your opponent',
    choices: ['skeleton', 'alien', 'dragon']
});
let p1 = new player(player1.name);
let o1 = new opponent(opponent1.select);
do {
    if (opponent1.select == 'skeleton') {
        console.log(`${chalk.bold.yellowBright(p1.name)} VS ${chalk.bold.blue(o1.name)}`);
    }
    else if (opponent1.select == 'alien') {
        console.log(`${chalk.bold.greenBright(p1.name)} VS ${chalk.bold.redBright(o1.name)}`);
    }
    else if (opponent1.select == 'dragon') {
        console.log(`${chalk.bold.blackBright(p1.name)} VS ${chalk.bold.whiteBright(o1.name)}`);
    }
    else {
        console.log('err...');
    }
    let ask = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'please select your action',
        choices: ['attack', 'defend', 'run', 'increase energy']
    });
    if (ask.action == 'attack') {
        //console.log('attack the opponent')
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.italic.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.italic.yellow(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.bold.italic.redBright('you loose :(  '));
                process.exit();
            }
            if (num = 0) {
                o1.fuelDecrease();
                console.log(chalk.italic.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.italic.yellow(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.bold.italic.bgBlueBright('you win :) '));
                process.exit();
            }
        }
        else if (ask.action == 'defend') {
            console.log('defend your self from enemy');
        }
        else if (ask.action == 'run') {
            console.log('you loose :( ');
            process.exit();
        }
        else if (ask.action == 'increase energy') {
            // console.log('energy increased...')
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`your energy is refilled ,your fuel is ${p1.fuel}`));
        }
        else {
            console.log('err...');
        }
    }
} while (true);
