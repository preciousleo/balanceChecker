import fs from 'fs';

export default async function saveKey(private_key: string, address: string, balance: string){
    try {
        const string = `private key: ${private_key}; address: ${address}; balance: ${balance}\n`;
        console.log(string)
        fs.appendFileSync('private-keys.txt', string)
    } catch (error) {
        console.log(error)
    }
}