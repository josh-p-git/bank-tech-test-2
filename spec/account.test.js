const Account = require ('../account.js');

describe('Account can be created', () => {
    const account = new Account();

    test('Account is created with a 0 balance', () => {
        expect(account.balance).toEqual(0);
    });

    test('Account is created with an empty statement', () => {
        expect(account.statement).toEqual([]);
    });
});

describe('A deposit can be made', () => {
    test('The balance is updated when a deposit is made', () => {
        const account = new Account();
        account.deposit(1000, '10/01/2003')
        expect(account.balance).toEqual(1000);
    });

    test('A record of the deposit amount and date is stored', () => {
        const account = new Account();
        account.deposit(1000, '10/01/2003')
        expect(account.statement).toEqual(["10/01/2003 || 1000 || || 1000"]);
    });

});