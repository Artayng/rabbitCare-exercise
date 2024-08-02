export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'พิจิตร' ,
        testCaseProvince: 'Phichit',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '8,000 - 9,999 บาท',
        testCaseIncome: 'THB 8,000 - 9,999',
        hmLoan: 'ไม่มีเลย',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '25',
        province: 'ปัตตานี' ,
        testCaseProvince: 'Pattani',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '10,000 - 11,999 บาท',
        testCaseIncome: 'THB 10,000 - 11,999',
        hmLoan: '1 รายการ',
        flow: 'negative'

    },

    
]


export const secondGroupOccupation = [

    //Positive Case
    {
        age: '30',
        province: 'แม่ฮ่องสอน' ,
        testCaseProvince: 'Mae Hong Son',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)',
        testCaseBusinessRegis: 'More than a year but less than 2 years',
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
        age: '27',
        province: 'เชียงราย' ,
        testCaseProvince: 'Chiang Rai',
        occupation: 'อาชีพอิสระ', 
        testCaseOccupationName: 'Freelancer',
        bankStatement: 'มี',
        testCaseBankStatement: 'Have',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '27',
        province: 'ปทุมธานี' ,
        testCaseProvince: 'Pathum Thani',
        occupation: 'อาชีพอิสระ', 
        testCaseOccupationName: 'Freelancer',
        bankStatement: 'ไม่มี',
        testCaseBankStatement: 'Not Have',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: '3 รายการ',
        flow: 'negative'

    }

]