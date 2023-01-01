// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).toBe(0);
//         }
//     }
// });


// Test Match String JEST 
test('This String Contain Hello', () => { 
    expect('Hello').toMatch(/H/);
 });

 test('This String Contain Hello', () => { 
    expect('Hello').not.toMatch(/a/);
 });