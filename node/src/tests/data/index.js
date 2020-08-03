const {Database} = require('../../src/data');

exports.FunctionsTest = () => {
    const TestMethods = {};
    TestMethods.DatabaseConnection = () => {
        it('teste de conexão com bd ', () => {
            const url = "";
            expect(Database(url).getData()).toEqual(Promise)
        });
    }
}