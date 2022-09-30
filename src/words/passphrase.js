import { words } from "./index.js";

export async function passphraseArray (array) {
    const dic = await words()
    return array.map(value => {
        return dic[value].word
    })
}

export default async function (array) {
    return (await passphraseArray(array)).join('-')
}