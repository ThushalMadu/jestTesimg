// test('the data is peanut butter', async () => {
//    const data = await fetchData();
//    console.log("🚀 ~ file: asynDefine.test.js ~ line 3 ~ test ~ data", data)
//    expect(data).toBe('peanut butter');
//  });
 
// test('the data is peanut butter', done => {
//   function callback(error, data) {
//     if (error) {
//       done(error);
//       return;
//     }
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

//  async function fetchData() {
//     var data = 'peanut butter'
//     return data;
//  }

beforeEach(() => {
  console.log("This is test BEFORE running")
 });
 
 afterEach(() => {
   console.log("This is test AFTER running")
});
 
 test('This String Contain Hello', () => { 
   expect('Hello').toMatch(/H/);
});