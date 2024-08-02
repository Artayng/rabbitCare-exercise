import {test,expect} from "@playwright/test"

test('test',async({page}) => {
    await page.goto("https://staging-crm.sabye-songkran.com/")
    await page.locator("input#identifier").fill("rabbittesting@rabbitcallcenter.com")
    await page.locator("input#password").fill("passw0rD#2022")
    await page.locator('button[type="submit"]').click()
})