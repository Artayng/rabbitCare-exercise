import {test} from '@playwright/test'
import {bankFunction} from '../helper/example.ts'
import {firstGroupOccupation,secondGroupOccupation} from '../fixtures/ttbCC.ts'


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
        await bank.verifyTestcheck(data.flow,'บัตรกดเงินสด ทีทีบี แฟลช')
    })

})

secondGroupOccupation.forEach((data) => {
    test(`${data.testCaseOccupationName} with company registed ${data.testCaseBusinessRegis} and income ${data.testCaseIncome}`,async({page}) => {
        const bank = new bankFunction(page)
        await bank.onClickOTP()
        await bank.secondGroupOccupation(data.age,data.province,data.occupation,data.businessRegis,data.avgRevenue,data.income,data.hmLoan)
        await bank.consentCheck()
        await bank.verifyTestcheck(data.flow,'บัตรกดเงินสด ทีทีบี แฟลช')
    })
})