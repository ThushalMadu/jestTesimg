describe('NewUI', () => {
    beforeAll(async () => {
        await device.launchApp();
        await device.reloadReactNative();
    });
    it('🧪 🧪 Should Have ScrollView in Screen 🧬 🧬', async () => {
        await expect(element(by.id('scrollViewTest'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Header in Screen 🧬 🧬', async () => {
        await expect(element(by.id('headerMainView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Download Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('downloadTabView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Upload Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('uploadTabView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Label Country Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('labelCountryView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Instruction Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('instructionTabView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have IP Address TabView in Screen 🧬 🧬', async () => {
        await expect(element(by.id('iPAddressView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Broadcast TabView Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('broadcastView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have Device TabView in Screen 🧬 🧬', async () => {
        await expect(element(by.id('deviceView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have VPN TabView in Screen 🧬 🧬', async () => {
        await expect(element(by.id('vpnView'))).toBeVisible();
    });
    it('🧪 🧪 Should Have All Information Tab in Screen 🧬 🧬', async () => {
        await expect(element(by.id('allInformationViewTab'))).toBeVisible();
    });
    it('🧪 🧪 ScrollView Should Down 🧬 🧬', async () => {
        await element(by.id('scrollViewTest')).swipe('down', 'slow'); // set swipe speed
    });
    it('🧪 🧪 ScrollView Should Up 🧬 🧬', async () => {
        await element(by.id('scrollViewTest')).swipe('up', 'fast'); // set swipe speed
    });
});