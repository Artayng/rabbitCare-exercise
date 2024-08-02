import {test} from '@playwright/test'
import {bankFunction} from '../helper/example.ts'
import {firstGroupOccupation,secondGroupOccupation,thirdGroupOccupation} from '../fixtures/moneyThunder.ts'


firstGroupOccupation.forEach((data) => {
    test(`${data.testCaseOccupationName} with work experience ${data.testCaseExperienceName} and income ${data.testCaseIncome}` , async({page}) => {
        const bank = new bankFunction(page)
        //Phone and OTP Part
        await bank.onClickOTP()
        //Condition Part
        await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
        //Consent Click Part
        await bank.consentCheck()
        //Check Bank Visible
        await bank.verifyTestcheckTwoBank(data.flow,'สินเชื่อส่วนบุคคล มันนี่ทันเดอร์','สินเชื่อนาโนไฟแนนซ์ MoneyThunder')
    })

})

secondGroupOccupation.forEach((data) => {
    test(`${data.testCaseOccupationName} with company registed ${data.testCaseBusinessRegis} and income ${data.testCaseIncome}`,async({page}) => {
        const bank = new bankFunction(page)
        await bank.onClickOTP()
        await bank.secondGroupOccupation(data.age,data.province,data.occupation,data.businessRegis,data.avgRevenue,data.income,data.hmLoan)
        await bank.consentCheck()
        await bank.verifyTestcheckTwoBank(data.flow,'สินเชื่อส่วนบุคคล มันนี่ทันเดอร์','สินเชื่อนาโนไฟแนนซ์ MoneyThunder')
    })
})


thirdGroupOccupation.forEach((data) => {
    test(`${data.testCaseOccupationName} and ${data.testCaseBankStatement} 6-month bank statement and income ${data.testCaseIncome}` , async({page}) => {
        const bank = new bankFunction(page)
        await bank.onClickOTP()
        await bank.thirdGroupOccupation(data.age,data.province,data.occupation,data.bankStatement,data.income,data.hmLoan)
        await bank.consentCheck()
        await bank.verifyTestcheckTwoBank(data.flow,'สินเชื่อส่วนบุคคล มันนี่ทันเดอร์','สินเชื่อนาโนไฟแนนซ์ MoneyThunder')
    })

})