export const firstGroupOccupation = [
    //Positive Case
    {
        age: '26',
        province: 'กรุงเทพฯ' ,
        testCaseProvince: 'Bangkok',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '10,000 - 11,999 บาท',
        testCaseIncome: 'THB 10,000 - 11,999',
        hmLoan: '1 รายการ',
        flow: 'positive'
    },

    {
        age: '26',
        province: 'ระยอง' ,
        testCaseProvince: 'Rayong',
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '2 รายการ',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '26',
        province: 'นราธิวาส' ,
        testCaseProvince: 'Narathiwat',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '40,000 - 49,999 บาท',
        testCaseIncome: 'THB 40,000 - 49,999',
        hmLoan: '3 รายการ',
        flow: 'negative'
    },

    {
        age: '26',
        province: 'ระยอง' ,
        testCaseProvince: 'Rayong',
        occupation: 'ทหาร/ตำรวจ', 
        testCaseOccupationName: 'Military/Police',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '2 รายการ',
        flow: 'negative'
    },
]

export const secondGroupOccupation = [
    //Negative Case
    {
        age: '30',
        province: 'กรุงเทพฯ' ,
        testCaseProvince: 'Bangkok',
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


