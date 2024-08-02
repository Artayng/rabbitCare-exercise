export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '3 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '26',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)',
        testCaseOccupationName: "Full-time employee",
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: "Less than 4 months",
        income: '40,000 - 49,999 บาท',
        testCaseIncome: "THB 40,000 - 49,999",
        hmLoan: 'ไม่มีเลย',
        flow: 'negative'
    },
    {
        age: '61',
        province: 'กรุงเทพฯ' ,
        occupation: 'ราชการ/รัฐวิสาหกิจ',
        testCaseOccupationName: "Government officer/Public servant",
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: "4 months to 1 year",
        income: '30,000 - 39,999 บาท',
        testCaseIncome: "THB 30,000 - 39,999",
        hmLoan: 'ไม่มีเลย',
        flow: 'negative'
    },
    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        occupation: 'พนักงานเอกชน (ประจำ)',
        testCaseOccupationName: "Full-time employee",
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: "4 months to 1 year",
        income: '15,000 - 19,999 บาท',
        testCaseIncome: "THB 15,000 - 19,999",
        hmLoan: 'ไม่มีเลย',
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
        businessRegis: 'ตั้งแต่ 3 ปีขึ้นไป',
        testCaseBusinessRegis: 'More than 3 years',
        avgRevenue: 'น้อยกว่า 200,000 บาทต่อเดือน',
        testCaseAvgRevenue: 'Less than THB 200,000 per month',
        income: '40,000 - 49,999 บาท',
        testCaseIncome: 'THB 40,000 - 49,999',
        hmLoan: '3 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '26',
        province: 'กรุงเทพฯ' ,
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)',
        testCaseBusinessRegis: 'More than a year but less than 2 years',
        avgRevenue: 'น้อยกว่า 200,000 บาทต่อเดือน',
        testCaseAvgRevenue: 'Less than THB 200,000 per month',
        income: '40,000 - 49,999 บาท',
        testCaseIncome: 'THB 40,000 - 49,999',
        hmLoan: '2 รายการ',
        flow: 'negative'

    },


]

