const currentDate = new Date().toLocaleDateString('en-GB');


class Account {
    constructor() {
        this.balance = 0;
        this.statement = [];
        this.date = currentDate;
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
        this.balance -= amount;
        const withdrawal = `${this.date} || || ${amount} || ${this.balance}`;
        this.statement.push(withdrawal);
    }
};

/*test = new Account;
test.deposit(1000);
console.log(test.returnStatement());*/

module.exports = Account;