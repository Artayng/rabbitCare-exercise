import {test, expect} from '@playwright/test'


test('Rabbitcare Health' ,async({page}) => {
    await page.goto("https://staging-rc-website.rabbitinternet.com/en/product/health-insurance/questions")
    await page.click('label:has-text("Male")')
    await page.click('label:has-text("Yes")')


    //Input DOB
    await page.locator('input[name="customer_dob"]').pressSequentially('20/10/2000')
    await page.getByPlaceholder("//*[@id='customer_dob']/div/div[1]/div/div[2]/input").fill("10/02/2000")
    await expect(page.locator('#customer_dob > div > div.row > div > button')).toBeVisible()   // ใช้ selector
    await (page.locator('#customer_dob > div > div.row > div > button')).click()


    //Input Phone
    await page.locator("input[name='customer_phone']").fill("0857367583")
    await expect(page.locator('#customer_countrycode > div > div.row > div > button')).toBeVisible() // เช็คว่าปุ่มมัน enable หรือเปล่า
    await (page.locator('#customer_countrycode > div > div.row > div > button')).click() // กดปุ่ม



    //Input Firstname & Lastname
    await page.locator("input[name='customer_first_name']").fill("Natthipat")
    await page.locator("input[name='customer_last_name']").fill("Ittichaicharn")
    await expect(page.locator('#customer_first_name > div > div.row > div > button')).toBeVisible() // เช็คว่าปุ่มมัน enable หรือเปล่า
    await (page.locator('#customer_first_name > div > div.row > div > button')).click() // กดปุ่ม
    

    //Input Customer Email
    await page.locator("input[name='customer_email']").fill( "art@gmail.com")
    await expect(page.locator('#customer_email > div > div.row > div > button')).toBeVisible() // เช็คว่าปุ่มมัน enable หรือเปล่า
    await (page.locator('#customer_email > div > div.row > div > button')).click() // กดปุ่ม


    //Click IPD/OPD
    await page.locator('#product_category > div:nth-child(2) > div > div:nth-child(1) > div > label').click()
    
    //Select Plan
    await page.locator('#ipdopdtype > div:nth-child(2) > div > div:nth-child(1) > div > label').click() 

    //Select covered
    await page.locator('#product_ipdopd_subcategory > div:nth-child(2) > div > div:nth-child(1) > div > label').click()

    //Select additional coverage
    await page.locator('#opdcov__detail-card > div').click()
    await page.locator('#healthCheck__detail-card > div').click()
    await page.locator('#ipdopdcoverage > div > div.row > div > button').click()


    //Select time to call
    await page.click('//*[@id="customer_callingtime"]/div/div/div/div[2]/div[1]/button[1]')
    await page.locator('#customer_callingtime > div > div > div > div.col-12.col-md-6.mt-3.mt-md-0 > div.mt-3 > button').click()

    //Consent click
    await page.click('//*[@id="tc"]/div[1]/div/div/div[1]/div[1]/div/label')
    await page.click('#btn-marketing-consent')


    await expect(page).toHaveURL ('https://staging-rc-website.rabbitinternet.com/en/product/health-insurance/quotes')
    await page.waitForTimeout(6000);





})