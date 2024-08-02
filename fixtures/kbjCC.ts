export const firstGroupOccupation = [
     //Positive Case
     {
        age: '26',
        province: 'สมุทรปราการ' ,
        testCaseProvince: 'Samut Prakan',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '15,000 - 19,999 บาท',
        testCaseIncome: 'THB 15,000 - 19,999',
        hmLoan: 'ไม่มีเลย',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '27',
        province: 'กรุงเทพฯ' ,
        testCaseProvince: 'Bangkok',
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'negative'
    },


]

export const secondGroupOccupation = [

    //Positive Case
    {
        age: '30',
        province: 'สมุทรสาคร' ,
        testCaseProvince: 'Samut Sakhon',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'น้อยกว่า 6 เดือน',
        testCaseBusinessRegis: 'Less than 6 months',
        avgRevenue: 'น้อยกว่า 200,000 บาทต่อเดือน',
        testCaseAvgRevenue: 'Less than THB 200,000 per month',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '30',
        province: 'ยะลา' ,
        testCaseProvince: 'Yala',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 2 ปีขึ้นไป (แต่ไม่เกิน 3 ปี)',
        testCaseBusinessRegis: 'More than 2 years but less than 3 years',
        avgRevenue: 'น้อยกว่า 200,000 บาทต่อเดือน',
        testCaseAvgRevenue: 'Less than THB 200,000 per month',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '3 รายการ',
        flow: 'negative'

    },

]

export const thirdGroupOccupation = [
     //Positive Case
     {
        age: '25',
        province: 'ปทุมธานี' ,
        testCaseProvince: 'Pathum Thani',
        occupation: 'เจ้าของกิจการ - ไม่มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - no company registered',
        bankStatement: 'ไม่มี',
        testCaseBankStatement: 'Not Have',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    },

      //Negative Case
      {
        age: '25',
        province: 'แม่ฮ่องสอน' ,
        testCaseProvince: 'Mae Hong Son',
        occupation: 'เจ้าของกิจการ - ไม่มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - no company registered',
        bankStatement: 'มี',
        testCaseBankStatement: 'Have',
        income: '40,000 - 49,999 บาท',
        testCaseIncome: 'THB 40,000 - 49,999',
        hmLoan: '3 รายการ',
        flow: 'negative'
    },

]