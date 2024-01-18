import puppeteer from "puppeteer";
import generatePrivateKey from "./functions/generate-private-key";
import getBalance from "./functions/get-balance";
import saveKey from "./functions/save-key";
import { isEmpty } from "./functions/helpers";

(async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();

    for (let index = 0; index < 100; index++) {
        const data = await generatePrivateKey(page)
        if(isEmpty(data?.uncompressedP2PKH)) continue;
        const balance = await getBalance(data?.uncompressedP2PKH, page)
    
        if(!balance) await saveKey(data?.private_key, `${balance}`)
    }
})()

