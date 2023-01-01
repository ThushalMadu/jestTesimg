const arrayTest = [
    'Samsung', 'Apple', 'Nokia', 'One Plus'
];

test('This Array Conatin Apple', () => { 
    expect(arrayTest).toContain('Nokia');
 });