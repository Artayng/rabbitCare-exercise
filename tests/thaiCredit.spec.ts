import {test} from '@playwright/test'
import {bankFunction} from '../helper/example.ts'
import {firstGroupOccupation} from '../fixtures/thaiCredit.ts'

firstGroupOccupation.forEach((data) => {
    test(`${data.testCaseOccupationName} with work experience ${data.testCaseExperienceName} and income ${data.testCaseIncome} at ${data.testCaseProvince} ` , async({page}) => {
        const bank = new bankFunction(page)
        //Phone and OTP Part
        await bank.onClickOTP()
        //Condition Part
        await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
        //Consent Click Part
        await bank.consentCheck()
        //Check Bank Visible
        await bank.verifyTestcheck(data.flow,'สินเชื่อบุคคลไทยเครดิต')
    })

})