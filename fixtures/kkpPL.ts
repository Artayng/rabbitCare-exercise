export const firstGroupOccupation = [
    //Positive Case
    {
        age: '25',
        province: 'ปทุมธานี' ,
        testCaseProvince: 'Pathum Thani',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '1 รายการ',
        flow: 'positive'

    },
    {
        age: '35',
        province: 'ระยอง' ,
        testCaseProvince: 'Rayong',
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: 'มากกว่า 1 ปีขึ้นไป',
        testCaseExperienceName: 'More than 1 year',
        income: '50,000 - 59,999 บาท',
        testCaseIncome: 'THB 50,000 - 59,999',
        hmLoan: 'มากกว่า 3 รายการ',
        flow: 'positive'
    },

    //Negative Case
    {
        age: '45',
        province: 'น่าน' ,
        testCaseProvince: 'Nan',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '1 รายการ',
        flow: 'neagtive'
    },

    {
        age: '47',
        province: 'จันทบุรี' ,
        testCaseProvince: 'Chanthaburi',
        occupation: 'พนักงานเอกชน (ประจำ)', 
        testCaseOccupationName: 'Full-time employee',
        experience: 'น้อยกว่า 4 เดือน',
        testCaseExperienceName: 'Less than 4 months',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '2 รายการ',
        flow: 'neagtive'
    },

    {
        age: '28',
        province: 'นครปฐม' ,
        testCaseProvince: 'Nakhon Pathom',
        occupation: 'ราชการ/รัฐวิสาหกิจ', 
        testCaseOccupationName: 'Government officer/Public servant',
        experience: '4 เดือน - 1 ปี',
        testCaseExperienceName: '4 months to 1 year',
        income: '20,000 - 29,999 บาท',
        testCaseIncome: 'THB 20,000 - 29,999',
        hmLoan: '1 รายการ',
        flow: 'neagtive'
    },

 ]

 export const secondGroupOccupation = [

    //Positive Case
    {
        age: '30',
        province: 'ชลบุรี' ,
        testCaseProvince: 'Chon Buri',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี)',
        testCaseBusinessRegis: 'More than a year but less than 2 years',
        avgRevenue: '200,000 บาทต่อเดือน หรือมากกว่า',
        testCaseAvgRevenue: 'THB 200,000 per month or more',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '3 รายการ',
        flow: 'positive'

    },

    //Negative Case
    {
        age: '30',
        province: 'สระแก้ว' ,
        testCaseProvince: 'Sa Kaeo',
        occupation: 'เจ้าของกิจการ - มีทะเบียนการค้า', 
        testCaseOccupationName: 'Business owner - company registered',
        businessRegis: 'ตั้งแต่ 6 เดือน (แต่ไม่เกิน 1 ปี)',
        testCaseBusinessRegis: 'More than 6 months but less than a year',
        avgRevenue: 'น้อยกว่า 200,000 บาทต่อเดือน',
        testCaseAvgRevenue: 'Less than THB 200,000 per month',
        income: '30,000 - 39,999 บาท',
        testCaseIncome: 'THB 30,000 - 39,999',
        hmLoan: '2 รายการ',
        flow: 'negative'

    },
 ]