describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
        await device.reloadReactNative();
    });

    it('🧪 🧪 Should Have ScrollView in Screen 🧬 🧬', async () => {
        await expect(element(by.id('scrollViewTest'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Red Button in Screen 🧬 🧬', async () => {
        await expect(element(by.id('redButton'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Blue Button in Screen 🧬 🧬', async () => {
        await expect(element(by.id('blueButton'))).toBeVisible();
    });
    it('🧪 🧪 Press tap on Red button 🧬 🧬', async () => {
        await element(by.id('redButton')).tap();
    });
    it('🧪 🧪 Press tap on Blue button 🧬 🧬', async () => {
        await element(by.id('blueButton')).tap();
    });
    it('🧪 🧪 Should Have TextInput in Screen 🧬 🧬', async () => {
        await expect(element(by.id('textInput'))).toBeVisible();
    });
    it('🧪 🧪 Should Have write Thushal Madhushankha in TextInput Screen 🧬 🧬', async () => {
        await element(by.id('textInput')).typeText('Thushal Madhushankhaa');
    });
    it('🧪 🧪 Should Have Remove "a" Letter in TextInput Screen 🧬 🧬', async () => {
        await element(by.id('textInput')).tapBackspaceKey();
    });
    it('🧪 🧪 Should Have Label Contain in Screen 🧬 🧬', async () => {
        await expect(element(by.id('labelWithContain'))).toBeVisible();
    });
    // it('🧪 🧪 Should Have Replace Sorry Thushal Madhushankha in TextInput Screen 🧬 🧬', async () => {
    //     await element(by.id('textInput')).replaceText('Thushal Madhushankha');
    // });
});
