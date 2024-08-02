export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '8,000 - 9,999 บาท',
        testCaseIncome: 'THB 8,000 - 9,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: 'น้อยกว่า 8,000 บาท',
        testCaseIncome: 'Less than THB 8,000',
        hmLoan: '1 รายการ',
        flow: 'negative'
    },
]

export const secondGroupOccupation = [

    //Positive Case
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 2 ปีขึ้นไป (แต่ไม่เกิน 3 ปี)',
        testCaseBusinessRegis: 'More than 2 years but less than 3 years',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'positive'

    },
]

export const thirdGroupOccupation = [
    //Positive Case
    {
        
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - ไม่มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - no company registered',
        bankStatement: 'ไม่มี',
        testCaseBankStatement: 'Not Have',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    }


]

