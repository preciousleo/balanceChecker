import puppeteer from "puppeteer";
import generatePrivateKey from "./functions/generate-private-key";
import getBalance from "./functions/get-balance";
import saveKey from "./functions/save-key";
import { isEmpty } from "./functions/helpers";

(async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();

    for (let index = 0; index < 100; index++) {
        const {uncompressedP2PKH, private_key} = await generatePrivateKey(page)
        console.log(uncompressedP2PKH)
        if(isEmpty(uncompressedP2PKH)) continue;
        const balance = await getBalance(uncompressedP2PKH, page)
    
        if(!balance) await saveKey(private_key, `${balance}`)
    }
})()

