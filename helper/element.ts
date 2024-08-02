export class element {
    readonly url = "https://leasing-loan.rabbitcare.com/product/personal-loan/questions"
    readonly phoneInput = 'phone-input'
    readonly otpClick = 'กดเพื่อรับ OTP'
    readonly otpInput = 'otp-input-'
    readonly verifyButton = 'button:has-text("ยืนยัน")'
    readonly acceptAllConsentButton = 'label[for="acceptAll"]'
    readonly proceedButton = 'button:has-text("ดำเนินการต่อ")'
    readonly age = 'select[name="age"]'
    readonly province = 'select[name="province"]'
    readonly occupation = 'select[name="occupation"]'
    readonly experience = 'select[name="experience"]'
    readonly businessRegistered = 'select[name="registered"]'
    readonly avgRevenue = 'select[name="avgrevenue"]'
    readonly bankStatementTrue = 'label[for="bankstatement-Y"]'
    readonly bankStatementFasle = 'label[for="bankstatement-N"]'
    readonly income = 'select[name="income"]'
    readonly hmLoan = 'select[name="hmloan"]' 
    readonly cardSection = '[data-testid="card-section"]'
    readonly textVerify = (text) => `div.grid-in-first h4.text-rabbitBlue:text-is("${text}")`
    readonly bankStatementYes = 'label[for="bankstatement-Y"]'
    readonly bankStatementNo = 'label[for="bankstatement-N"]'

}