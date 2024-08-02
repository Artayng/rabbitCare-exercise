import {test, expect} from '@playwright/test'


test('Verify Salary error message' , async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="monthlySalary"]').fill("0")
    await expect(page.locator('.text-errorColor')).toHaveText('ระบุเงินเดือนเป็นตัวเลขเท่านั้น (เริ่มต้น 1 บาท)')
})

test('Verify Total Loan Amount Error Message' , async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="loanAmt"]').fill("0")
    await expect(page.locator('.text-errorColor')).toHaveText('ระบุวงเงินสินเชื่อเป็นตัวเลขเท่านั้น (เริ่มต้น 1 บาท)')
})

test('Verify Total Loan Amount If Salary <= 30000 ' , async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="monthlySalary"]').fill("30000")
    await page.locator('input[name="loanAmt"]').fill("50000")
    await expect(page.locator('.text-errorColor')).toHaveText('กรุณาระบุเงินกู้ระหว่าง 1-45,000 บาท')
})

test('Verify Total Loan Amount If Salary > 30000' , async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="monthlySalary"]').fill("50000")
    await page.locator('input[name="loanAmt"]').fill("300000")
    await expect(page.locator('.text-errorColor')).toHaveText('กรุณาระบุเงินกู้ระหว่าง 1-250,000 บาท')
})

test('Verify error message when year > 6 || month > 11', async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="loanTermYears"]').fill("7")
    await page.locator('input[name="loanTermMonths"]').fill("12")
    await expect(page.getByText('ระบุเวลาตั้งแต่ 0-6')).toBeVisible()
    await expect(page.getByText('ระบุเวลาตั้งแต่ 0-11 เดือน เท่านั้น')).toBeVisible()
})

test('Verify loan term period must not more than 6 year' , async({page}) => {
    await page.goto("https://rabbitcare.com/personal-loan")
    await page.locator('input[name="loanTermYears"]').fill("6")
    await page.locator('input[name="loanTermMonths"]').fill("1")
    await expect(page.getByText('ระบุระยะเวลากู้ได้สูงสุด 6 ปี')).toBeVisible()
})

//เหลือคำนวณ ยอดที่ต้องชำระรายเดือน 
