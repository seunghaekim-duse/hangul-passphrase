import request from "./request.js";
import XLSX from 'xlsx'
import { writeFileSync } from 'fs'
import path from 'path'
import { DIC_FILE_NAME, DIR } from './const.js'

export async function getWords() {
    const response = await request()
    const arrayBuffer = await response.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')

    const sheet = XLSX.read(base64)
    const json = XLSX.utils.sheet_to_json(sheet.Sheets[sheet.SheetNames[0]])

    const words = json.filter(item => {
        return item['단어'].match(/.+\d+/) === null
    }).map(item => {
        return {
            word: item['단어'],
            pos: item['품사']
        }
    })

    return words
}

export default async function (dir = DIR) {
    const words = await getWords()
    const data = JSON.stringify(words)
    const filePath = path.join(dir, DIC_FILE_NAME)
    
    writeFileSync(filePath, data)
}