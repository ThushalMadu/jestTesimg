describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('🧪 🧪 Should Have ScrollView in Screen 🧬 🧬', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('🧪 🧪 Should Have step_one in Screen 🧬 🧬', async () => {
    await expect(element(by.id('step_one'))).toBeVisible();
  });
  it('🧪 🧪 Should Have red_Button in Screen 🧬 🧬', async () => {
    await expect(element(by.id('red_Button'))).toBeVisible();
  });
  it('🧪 🧪 Press Multi tap on Red button 🧬 🧬', async () => {
    await element(by.id('red_Button')).tap();
  });
  it('🧪 🧪 ScrollDown is working and Down 🧬 🧬', async () => {
    await element(by.id('welcome')).swipe('up', 'slow', 0.5);
  });
  it('🧪 🧪 Should Have blue_Button in Screen 🧬 🧬', async () => {
    // await element(by.id('welcome')).swipe('up', 'slow', 0.5);
    await expect(element(by.id('blue_Button'))).toBeVisible();
  });
  it('🧪 🧪 Show Long Press step_one after 1.5 Seconds 🧬 🧬', async () => {
    // await element(by.id('welcome')).swipe('up', 'slow', 0.5);
    await element(by.id('blue_Button')).multiTap(3);
  });
});
