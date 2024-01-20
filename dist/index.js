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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const generate_private_key_1 = __importDefault(require("./functions/generate-private-key"));
const get_balance_1 = __importDefault(require("./functions/get-balance"));
const save_key_1 = __importDefault(require("./functions/save-key"));
const helpers_1 = require("./functions/helpers");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: "new" });
    const page = yield browser.newPage();
    for (let index = 0; index < 100; index++) {
        try {
            const data = yield (0, generate_private_key_1.default)(page);
            if ((0, helpers_1.isEmpty)(data === null || data === void 0 ? void 0 : data.uncompressedP2PKH))
                continue;
            const balance = yield (0, get_balance_1.default)(data === null || data === void 0 ? void 0 : data.uncompressedP2PKH, page);
            if (!balance)
                yield (0, save_key_1.default)(data === null || data === void 0 ? void 0 : data.private_key, data === null || data === void 0 ? void 0 : data.uncompressedP2PKH, `${balance || 0}`);
        }
        catch (error) {
            continue;
        }
    }
}))();
