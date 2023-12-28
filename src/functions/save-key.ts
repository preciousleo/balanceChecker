import fs from 'fs';

export default async function saveKey(private_key: string, balance: string){
    try {
        fs.appendFileSync('private-keys.txt', `private key: ${private_key}; balance: ${balance}\n`)
    } catch (error) {
        console.log(error)
    }
}