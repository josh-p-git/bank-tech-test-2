const Account = require ('../account.js');
const currentDate = new Date().toLocaleDateString('en-GB'); //this is the current date in dd/mm/yyyy format

describe('Account can be created', () => {
    const account = new Account();

    test('Account is created with a 0 balance', () => {
        expect(account.balance).toEqual(0);
    });

    test('Account is created with an empty statement', () => {
        expect(account.statement).toEqual([]);
    });

    test('Account is created with current date in dd/mm/yyyy format', () => {
        expect(account.date).toEqual(currentDate);
    });    
});

describe('A deposit can be made', () => {
    test('The balance is updated when a deposit is made', () => {
        const account = new Account();
        account.deposit(1000)
        expect(account.balance).toEqual(1000);
    });

    test('A record of the deposit amount and date is stored', () => {
        const account = new Account();
        account.deposit(1000)
        expect(account.statement).toEqual([`${currentDate} || 1000 || || 1000`]);
        expect(account.statement.length).toEqual(1);
    });
});

describe('A withdrawal can be made', () => {
    test('The balance is updated when a withdrawal is made', () => {
        const account = new Account();
        account.deposit(1000)
        account.withdraw(500)
        expect(account.balance).toEqual(500);
    });

    test('A record of the withdrawal amount and date is stored', () => {
        const account = new Account();
        account.deposit(1000)
        account.withdraw(500)
        expect(account.statement[1]).toEqual(`${currentDate} || || 500 || 500`);
        expect(account.statement.length).toEqual(2);
    });

    test('A withdrawal cannot be made if there are insufficient funds', () => {
        const account = new Account();
        account.deposit(1000)
        expect(() => account.withdraw(2000)).toThrow(Error('Account balance is too low'));
    });
});

describe('A statement can be viewed', () => {
    test('The statement can be viewed with the correct header', () => {
        const account = new Account();
        expect(account.returnStatement()).toEqual("date || credit || debit || balance\n");
    });

    test('The statement will show a deposit', () => {
        const account = new Account();
        account.deposit(1000)
        expect(account.returnStatement()).toContain("date || credit || debit || balance\n");
        expect(account.returnStatement()).toContain(`${currentDate} || 1000 || || 1000`)
    });

    test('The statement will show a withdrawal', () => {
        const account = new Account();
        account.deposit(1000)
        account.withdraw(500)
        expect(account.returnStatement()).toContain("date || credit || debit || balance\n");
        expect(account.returnStatement()).toContain(`${currentDate} || || 500 || 500`)
    });
});