const prompt = require('prompt-sync')();
const Account = require('./account.js');
const readline = require('readline');

const account = new Account;

const menu = [
    {name: 'Make a deposit', function: depositFunction},
    {name: 'Make a withdrawal', function: function2},
    {name: 'View your statement', function: function3},
    {name: 'Exit', function: exitProgram}
  ];

  function displayMenu() {
    console.log('Welcome to the bank');
    menu.forEach((option, index) => {
      console.log(`${index + 1} - ${option.name}`);
    });
    console.log('\nEnter the number of your choice:');
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.on('line', (input) => {
    const choice = parseInt(input);
          const chosenOption = menu[choice - 1];
      chosenOption.function();
  });

  function depositFunction() {
    rl.question('How much would you like to deposit?\n', (amountInput) => {
      const depositAmount = parseInt(amountInput);
      rl.question('What is the date?\n', (dateInput) => {
        const depositDate = dateInput;
        console.log(`You have deposited ${depositAmount} on ${depositDate}.\n`);
        account.deposit(amountInput, dateInput);
        displayMenu();
      });
    });
  }
  
  function function2() {
    // code for option 2
  }
  
  function function3() {
    // code for option 3
  }
    
  function exitProgram() {
    process.exit();
  }
  
  displayMenu();