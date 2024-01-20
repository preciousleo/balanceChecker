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
function generatePrivateKey(page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield page.goto('https://allprivatekeys.com/private-key-to-address');
            const input = yield page.$('#fetcher');
            const characters = "0123456789ABCDEF";
            let private_key = "";
            for (let i = 0; i < 64; i++) {
                const index = Math.floor(Math.random() * characters.length);
                private_key += characters[index];
                input.type(characters[index], { delay: 100 });
            }
            const btn = yield page.$('#converbutton');
            if (btn)
                yield btn.click();
            //@ts-ignore
            const uncompressedP2PKH = yield page.$eval("#uncompp2pkh", input => input.value);
            return {
                uncompressedP2PKH: (0, helpers_1.isEmpty)(uncompressedP2PKH) ? null : uncompressedP2PKH,
                private_key
            };
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = generatePrivateKey;
