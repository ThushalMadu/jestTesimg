const preDefine = require('./preDefine');

//Expect Result with JEST in build Function
test('ADDITION Should be Number', () => {
    // expect(preDefine.sum(1, 2)).toBe(3);
    expect(preDefine.sum(3,5)).not.toBeNull();
});

//Expect Test the Truthness using JEST Function
test('IF IT IS MORE 10 ===> Pass', () => { 
    expect(preDefine.testTruthNess(9)).toBeFalsy();
 });

//Expect Test the Truthness using JEST Function
test('IF SUM IS GREATER THAN 5 ===> Pass', () => { 
    expect(preDefine.sum(3,5)).toBeGreaterThan(5);
 });
