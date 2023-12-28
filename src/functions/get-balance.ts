import { Page } from "puppeteer";
import { isEmpty } from "./helpers";

export default async function getBalance(address: string, page: Page){
    try {
        await page.goto(`https://www.blockchain.com/explorer/addresses/btc/${address}`);
        await page.waitForSelector(".sc-5f049527-7", { visible: true });

        const balance = await page.$eval(".sc-5f049527-7", element => element.textContent.trim());

        if(!isEmpty(balance))return Number(balance)

    } catch (error) {
        console.log(error)
    }
}