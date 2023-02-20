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