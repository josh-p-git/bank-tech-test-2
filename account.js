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
        this.balance += amount;
        const deposit = `${this.date} || ${amount} || || ${this.balance}`;
        this.statement.push(deposit);
    }

    withdraw(amount) {
        if (amount <= this.balance ) {
        this.balance -= amount;
        const withdrawal = `${this.date} || || ${amount} || ${this.balance}`;
        this.statement.push(withdrawal);
        } else {
            throw new Error('Account balance is too low');
        }
    }
};

/*test = new Account;
test.deposit(1000);
test.withdraw(500);*/

module.exports = Account;