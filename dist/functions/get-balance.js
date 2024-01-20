"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function getBalance(address, page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield page.goto(`https://www.blockchain.com/explorer/addresses/btc/${address}`);
            yield page.waitForSelector(".sc-5f049527-7", { visible: true });
            const balance = yield page.$eval(".sc-5f049527-7", element => element.textContent.trim());
            if (!(0, helpers_1.isEmpty)(balance))
                return Number(balance);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = getBalance;
