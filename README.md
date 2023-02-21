# Bank tech test

This is my bank tech test, please see below for the requirements of the test, my initial notes/planning, instructions on how to run the code and tests and test coverage.


# Project requirements


* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


# Planning

I decided to write the program in JavaScript as it is the language I have spent the least amount of time using, therefore it would provide an additional challenge/learning opportunity. To test the program I decided to use Jest as I have experience of using this previously.

I started off by summarising the requirements in Excalidraw, so that I could visualise exactly what the specification was requiring of my code. I then picked out the words I felt were important, such as deposit, withdrawal, a date and the ability to print the statement.

I then listed the functioning I would like the project to have, then laid out what my 'account' class would look like.

I then made some additional notes as to what I wanted to achieve in terms of testing, error handling and a reminder to write this readme!

Below is a snapshot of the aforementioned Excalidraw

![initial-notes](https://user-images.githubusercontent.com/114086173/220374383-dac98d29-1ba5-4e14-ad06-c646c9fdd1de.png)
# How to run the code

Here are the instructions on how to run the code and tests.

To begin please clone this repository.

Ensure that you have Node Version Manager (NVM) installed. Information on how to install this can be found [here](https://nodejs.org/en/about/releases/). 

Once you have NVM you can install node by typing the below into your terminal:

    nvm install node
    nvm use node
Once Node is installed you can add Jest with the following terminal commands:

    npm add jest
    npm install -g jest

To run the code, ensure you are in the repository and type the following into your terminal:

    node account.js
To run the tests, please type the following into your terminal:

    jest

# Testing

To ensure that my code was functioning correctly I have implemented testing. I used a Test Driven Development (TDD) approach, writing the tests then creating the code to make these tests pass. As well as testing basic functionality I wanted to account for user error, so have added and tested errors for when incorrect input is given, such as entering words when a number is expected, or when the user tries to make a withdrawal that the balance does not allow. Below is a list of the areas covered by my tests, showing that my code achieves what is laid out by the project requirements. 

![Screenshot 2023-02-21 at 14 57 19](https://user-images.githubusercontent.com/114086173/220380408-821b40a5-98e6-4183-afa2-65291ca5d103.png)
