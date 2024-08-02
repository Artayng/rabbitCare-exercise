import {test} from '@playwright/test'
import {bankFunction} from '../helper/example.ts'
import {firstGroupOccupation,secondGroupOccupation} from '../fixtures/uobPL.ts'

firstGroupOccupation.forEach((data) => {
    if(data.flow == 'negative' && Number(data.age) > 60){
        test(`${data.testCaseOccupationName} with ${data.age} year(s)`,async({page}) => {
            const bank = new bankFunction(page)
            await bank.onClickOTP()
            await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
            await bank.consentCheck()
            await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }  
    else if(data.flow == 'negative' && data.experience == 'น้อยกว่า 4 เดือน'){
        test(`${data.testCaseOccupationName} with ${data.testCaseExperienceName}`,async({page})  => {
            const bank = new bankFunction(page)
            await bank.onClickOTP()
            await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
            await bank.consentCheck()
            await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }
    else if (data.flow == 'negative' && data.income == '15,000 - 19,999 บาท'){
        test(`${data.testCaseOccupationName} with income ${data.testCaseIncome}`,async({page})  => {
            const bank = new bankFunction(page)
            await bank.onClickOTP()
            await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
            await bank.consentCheck()
            await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }
    else{
        test(`${data.testCaseOccupationName} with work experience ${data.testCaseExperienceName} and income ${data.testCaseIncome} `,async({page}) => {
        const bank = new bankFunction(page)
        await bank.onClickOTP()
        await bank.firstGroupOccupation(data.age,data.province,data.occupation,data.experience,data.income,data.hmLoan)
        await bank.consentCheck()
        await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }
})

secondGroupOccupation.forEach((data) => {
    if (data.flow == 'negative' && data.businessRegis == 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)'){
        test(`${data.testCaseOccupationName} ${data.testCaseBusinessRegis}`,async({page}) => {
            const bank = new bankFunction(page)
            await bank.onClickOTP()
            await bank.secondGroupOccupation(data.age,data.province,data.occupation,data.businessRegis,data.avgRevenue,data.income,data.hmLoan)
            await bank.consentCheck()
            await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }
    else{
        test(`${data.testCaseOccupationName} with company registed ${data.testCaseBusinessRegis} and income ${data.testCaseIncome}`,async({page}) => {
            const bank = new bankFunction(page)
            await bank.onClickOTP()
            await bank.secondGroupOccupation(data.age,data.province,data.occupation,data.businessRegis,data.avgRevenue,data.income,data.hmLoan)
            await bank.consentCheck()
            await bank.verifyTestcheck(data.flow,'สินเชื่อส่วนบุคคล ยูโอบี เอ็กซ์เพรส')
        })
    }
})