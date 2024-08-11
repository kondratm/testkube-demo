import test from "@playwright/test";


test.describe('Just a demo', () => {
    
    test('HERE WE GO', async({ page }) => {
        await page.goto('https://testkube.io/')

    })
})