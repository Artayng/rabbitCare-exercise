import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout : 60000,
    retries: 0,
    fullyParallel: true,
    expect: { timeout: 20000 } ,
    use :{
        headless : false,
        viewport : {width : 1280 , height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video : "retain-on-failure",
        screenshot : "only-on-failure",
        launchOptions:{
            slowMo: 1000
        }
    },
    projects:[
        {
            name: "Chromium",
            use: { browserName : 'chromium' }
        },

        {
            name: "Firefox",
            use: {browserName: 'firefox'}

        },

        {
            name: "Webkit",
            use: {browserName: 'webkit'}
            
        },

    ],

}

export default config