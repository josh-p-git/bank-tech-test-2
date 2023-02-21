class Account {
    constructor() {
        this.balance = 0;
        this.statement = [];
        this.date = new Date().toLocaleDateString('en-GB');
    }

    returnStatement() {
        return "date || credit || debit || balance\n" +
        this.statement.reverse().join('\n');
    }

    deposit(amount) {
        if (typeof amount != 'number' ) {
            throw new Error('Please enter a number');
        } else {
            this.balance += amount;
            const deposit = `${this.date} || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`;
            this.statement.push(deposit);
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
            this.statement.push(withdrawal);
        }
    }
};

module.exports = Account;