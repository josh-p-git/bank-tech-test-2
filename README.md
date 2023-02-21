# Bank tech test

This is my bank tech test, please see below for the requirements of the test, my initial notes/planning and instructions on how to run the code and tests


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

I started off by summarising the requirements in Excalidraw, so that I could visualise exactly the specification was requiring of my code. I then picked out the parts I felt were important, such as deposit, withdrawal, a date and the ability to print the statement.

I then listed the functioning I would like the project to have, then laid out what my 'account' class would look like.

I then made some additional notes as to what I wanted to achieve in terms of testing, error handling and a reminder to write this readme!

Below is a snapshot of the aforementioned Exaclidraw

```
![alt text](https://github.com/josh-p-git/bank-tech-test-2/blob/main/initial-notes.png)


# bank-tech-test













intall node version manager

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.zshrc


$ nvm install node
$ nvm use node


npm add jest
npm install -g jest
npm init -y



to run code

$ node app.js

to run tests

$ jest