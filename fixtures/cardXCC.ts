export const firstGroupOccupation = [
    //Positive Case
    {
        age: '26',
        province: 'กรุงเทพฯ' ,
        occupation: 'ทหาร/ตำรวจ', 
        testCaseOccupationName: 'Military/Police',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '10,000 - 11,999 บาท',
        testCaseIncome: 'THB 10,000 - 11,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    },
]

export const secondGroupOccupation = [

     //Positive Case
     {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)',
        testCaseBusinessRegis: 'More than a year but less than 2 years',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 6 เดือน (แต่ไม่เกิน 1 ปี)',
        testCaseBusinessRegis: 'More than 6 months but less than a year',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'negative'

    },
    
]

export const thirdGroupOccupation = [
     //Positive Case
     {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'อาชีพอิสระ', 
        testCaseOccupationName: 'Freelancer',
        bankStatement: 'มี',
        testCaseBankStatement: 'Have',
        income: '8,000 - 9,999 บาท',
        testCaseIncome: 'THB 8,000 - 9,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - ไม่มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - no company registered',
        bankStatement: 'ไม่มี',
        testCaseBankStatement: 'Not Have',
        income: '10,000 - 11,999 บาท',
        testCaseIncome: 'THB 10,000 - 11,999',
        hmLoan: 'ไม่มีเลย',
        flow: 'negative'
    },

]