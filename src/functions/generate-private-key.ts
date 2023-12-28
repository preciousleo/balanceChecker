import { Page } from "puppeteer";

export default async function generatePrivateKey(page: Page){
    try {
        await page.goto('https://allprivatekeys.com/private-key-to-address');

        const input = await page.$('#fetcher');
        const characters = "123456789ABCDEF";
        let private_key = ""
    
        for (let i = 0; i < 64; i++) {
            const index = Math.floor(Math.random() * characters.length);
            private_key += characters[index];
            input.type(characters[index], { delay: 100 })
        }
        
        const btn = await page.$('#converbutton');
        if (btn) await btn.click();

        //@ts-ignore
        const uncompressedP2PKH = await page.$eval("#uncompp2pkh", input => input.value)

        return {
            uncompressedP2PKH,
            private_key
        }
    } catch (error) {
        console.log(error)
    }
}