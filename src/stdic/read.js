import { readFileSync } from 'fs'
import { DIC_FILE_NAME, DIR } from './const.js';
import path from 'path'

export default async function (dir = DIR) {
    const filePath = path.join(dir, DIC_FILE_NAME)
    const data = readFileSync(filePath)
    return JSON.parse(data)
}