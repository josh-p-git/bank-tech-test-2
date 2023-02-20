class Account {
    constructor(balance, transactions) {
        this.balance = 0;
        this.statement = [];
    }

    deposit(amount, date) {
        this.balance += amount;
        const deposit = `${date} || ${amount} || || ${this.balance}`;
        this.statement.push(deposit);
    }
};

module.exports = Account;