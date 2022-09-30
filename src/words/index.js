import stdic from "../stdic/index.js"
import passphrase from "./passphrase.js"

let dic;

export async function words () {
    if (dic) {
        return dic
    }
    
    dic = await stdic.read()

    return dic
}

export default {
    words,
    passphrase
}