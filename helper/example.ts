import {element} from './element'
import { expect } from '@playwright/test'

export class bankFunction{
   readonly page
   readonly element

   constructor(page){
    this.page = page
    this.element = new element()
   }

  async onClickOTP(){

    await this.page.goto(this.element.url);
    await this.page.getByTestId(this.element.phoneInput).fill("0666666666")
    await this.page.getByText(this.element.otpClick).click()
    for (let i=0 ; i<=5 ; i++)
    {
        await this.page.getByTestId(this.element.otpInput + i).fill((i+1).toString())
    }
    await this.page.click(this.element.verifyButton)
   }

  async consentCheck(){
    await this.page.locator(this.element.acceptAllConsentButton).click()
    await this.page.click(this.element.proceedButton)
  }

 
  async firstGroupOccupation(age,province,occupation,experience,income,hmLoan){
    await this.page.locator(this.element.age).selectOption(age)
    await this.page.locator(this.element.province).selectOption(province)
    await this.page.locator(this.element.occupation).selectOption(occupation)
    await this.page.locator(this.element.experience).selectOption(experience)
    await this.page.locator(this.element.income).selectOption(income)
    await this.page.locator(this.element.hmLoan).selectOption(hmLoan)
  }

  async secondGroupOccupation(age,province,occupation,businessRegis,avgRevenue,income,hmLoan){
    await this.page.locator(this.element.age).selectOption(age)
    await this.page.locator(this.element.province).selectOption(province)
    await this.page.locator(this.element.occupation).selectOption(occupation)
    await this.page.locator(this.element.businessRegistered).selectOption(businessRegis)
    await this.page.locator(this.element.avgRevenue).selectOption(avgRevenue)
    await this.page.locator(this.element.income).selectOption(income)
    await this.page.locator(this.element.hmLoan).selectOption(hmLoan)
  }

  async thirdGroupOccupation(age,province,occupation,bankStatement,income,hmLoan){
    await this.page.locator(this.element.age).selectOption(age)
    await this.page.locator(this.element.province).selectOption(province)
    await this.page.locator(this.element.occupation).selectOption(occupation)
    if (bankStatement == 'มี'){
      await this.page.locator(this.element.bankStatementYes).click()
    }
    else{
      await this.page.locator(this.element.bankStatementNo).click()
    }
    await this.page.locator(this.element.income).selectOption(income)
    await this.page.locator(this.element.hmLoan).selectOption(hmLoan)
  }

  async verifyTestcheck(flow,bankName){
    if(flow == 'positive'){
      //await this.positiveCaseTextCheck(bankName)
      await expect(this.page.locator(this.element.textVerify(bankName))).toBeVisible()
    }
    else{
      //await this.negativeCaseTextCheck(bankName)
      await this.page.waitForSelector(this.element.cardSection)
      await expect(this.page.locator(this.element.textVerify(bankName))).toBeHidden()
    }
  }

  async verifyTestcheckTwoBank(flow,bankNameOne,bankNameTwo){
    if(flow == 'positive'){
      //await this.positiveCaseTextCheck(bankName)
      await expect(this.page.locator(this.element.textVerify(bankNameOne))).toBeVisible()  
      await expect(this.page.locator(this.element.textVerify(bankNameTwo))).toBeVisible()
    }
    else{
      //await this.negativeCaseTextCheck(bankName)
      await this.page.waitForSelector(this.element.cardSection)
      await expect(this.page.locator(this.element.textVerify(bankNameOne))).toBeHidden()
      await expect(this.page.locator(this.element.textVerify(bankNameTwo))).toBeHidden()
    }

  }

  async changeNumberFormat(income){
    const regex = /(?<=THB )[^THB]+?(?= -)/
    const result = income.match(regex)?.[0];
    const final = parseInt(result.replace(/,/g, ''), 10);
    return final
  }
  // async positiveCaseTextCheck(bankName){
  //   await expect(this.page.locator(this.element.textVerify(bankName))).toBeVisible()

  // }

  // async negativeCaseTextCheck(bankName){
  //   await this.page.waitForSelector(this.element.cardSection)
  //   await expect(this.page.locator(this.element.textVerify(bankName))).toBeHidden()
  // }

    
}
