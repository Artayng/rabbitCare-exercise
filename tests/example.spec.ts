import {test, expect} from '@playwright/test'


test('Rabbitcare Health' , async({page}) => {

    await page.goto("https://staging-rc-website.rabbitinternet.com/en/product/health-insurance/questions")
    await page.click('//*[@id="customer_gender"]/div[2]/div/div[1]/div/label')
    await page.click('//*[@id="customer_is_thai_national"]/div[2]/div/div[1]/div/label')


    //Input DOB
    await page.type("input[name='customer_dob']" , "10/02/2000")
    await page.click("button:has-text('NEXT')")


    //Input Phone
    await page.type("input[name='customer_phone']" , "0814536274")
    await page.click("//*[@id='customer_countrycode']/div/div[3]/div/button")


    //Input Firstname & Lastname
    await page.type("input[name='customer_first_name']" , "Natthipat")
    await page.type("input[name='customer_last_name']" , "Ittichaicharn")
    await page.click("//*[@id='customer_first_name']/div/div[3]/div/button")
    

    //Input Customer Email
    await page.type("input[name='customer_email']" , "art@gmail.com")
    await page.click("//*[@id='customer_email']/div/div[2]/div/button")

    //Click IPD/OPD
    await page.click('//*[@id="product_category"]/div[2]/div/div[1]/div/label')
    
    //Select Plan
    await page.click('//*[@id="ipdopdtype"]/div[2]/div/div[1]/div/label')

    //Select covered
    await page.click('//*[@id="product_ipdopd_subcategory"]/div[2]/div/div[1]/div/label')

    //Select additional coverage
    await page.click('//*[@id="opdcov__detail-card"]/div')
    await page.click('//*[@id="healthCheck__detail-card"]/div')
    await page.click('//*[@id="ipdopdcoverage"]/div/div[2]/div/button')


    //Select time to call
    await page.click('//*[@id="customer_callingtime"]/div/div/div/div[2]/div[1]/button[1]')
    await page.click('//*[@id="customer_callingtime"]/div/div/div/div[2]/div[2]/button')

    //Consent click
    await page.click('//*[@id="tc"]/div[1]/div/div/div[1]/div[1]/div/label')
    await page.click('#btn-marketing-consent')


    await expect(page).toHaveURL ('https://staging-rc-website.rabbitinternet.com/en/product/health-insurance/quotes')
    await page.waitForTimeout(6000);









    

})