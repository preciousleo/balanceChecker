import puppeteer from "puppeteer";
import generatePrivateKey from "./functions/generate-private-key";
import getBalance from "./functions/get-balance";
import saveKey from "./functions/save-key";
import { isEmpty } from "./functions/helpers";

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    for (let index = 0; index < 100; index++) {
        const {uncompressedP2PKH, private_key} = await generatePrivateKey(page)
        const balance = await getBalance(uncompressedP2PKH, page)
    
        if(!isEmpty(balance) && balance > 0) await saveKey(private_key, `${balance}`)
    }
})()

