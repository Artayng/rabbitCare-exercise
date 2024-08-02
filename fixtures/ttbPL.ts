export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'positive'

    },
    {
        age: '27',
        province: 'กรุงเทพฯ' ,
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: '1 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '28',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: 'ไม่มีเลย',
        flow: 'negative'

    },
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '15,000 - 19,999 บาท',
        testCaseIncome: 'THB 15,000 - 19,999',
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
        income: '40,000 - 49,999 บาท',
        testCaseIncome: 'THB 40,000 - 49,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)',
        testCaseBusinessRegis: 'More than a year but less than 2 years',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: '1 รายการ',
        flow: 'negative'

    },




]