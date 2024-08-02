export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'นนทบุรี' ,
        testCaseProvince: 'Nonthaburi',
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
        age: '25',
        province: 'ชลบุรี' ,
        testCaseProvince: 'Chonburi',
        occupation: 'ลูกจ้างชั่วคราว', 
        testCaseOccupationName: 'Temporary employee',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '1 รายการ',
        flow: 'negative'

    },

    {
        age: '25',
        province: 'กรุงเทพฯ' ,
        testCaseProvince: 'Bangkok',
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '1 รายการ',
        flow: 'negative'

    },

]


export const secondGroupOccupation = [

    //Positive Case
    {
        age: '30',
        province: 'นครปฐม' ,
        testCaseProvince: 'Nakhon Pathom',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 3 ปีขึ้นไป',
        testCaseBusinessRegis: 'More than 3 year',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '30',
        province: 'สมุทรปราการ' ,
        testCaseProvince: 'Samut Prakarn',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 2 ปีขึ้นไป (แต่ไม่เกิน 3 ปี)',
        testCaseBusinessRegis: 'More than 2 years but less than 3 years',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '60,000 - 99,999 บาท',
        testCaseIncome: 'THB 60,000 - 99,999',
        hmLoan: '3 รายการ',
        flow: 'negative'

    },




]

