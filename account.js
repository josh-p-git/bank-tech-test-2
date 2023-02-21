currentDate = new Date().toLocaleDateString('en-GB'); //current date in dd/mm/yyyy format

class Account {
    constructor() {
        this.balance = 0;
        this.statement = [];
        this.date = currentDate; 
    }

    returnStatement() {
        if (this.statement.length === 0) {
            throw new Error('No transactions have been made')
        } else {
            return "date || credit || debit || balance\n" +
            this.statement.reverse().join('\n'); //returns statement entries in reverse chronolgical order
        }
    }

    deposit(amount) {
        if (typeof amount != 'number' ) {
            throw new Error('Please enter a number');
        } else {
            this.balance += amount;
            const deposit = `${this.date} || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`;
            this.statement.push(deposit); //updates the balance then saves a record of the transaction
        }
    }

    withdraw(amount) {
        if (typeof amount != 'number' ) {
            throw new Error('Please enter a number');
        } else if  (amount >= this.balance ){
            throw new Error('Account balance is too low');
        } else {
            this.balance -= amount;
            const withdrawal = `${this.date} || || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`;
            this.statement.push(withdrawal); //updates the balance then saves a record of the transaction
        }
    }
};

module.exports = Account;