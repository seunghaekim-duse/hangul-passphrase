import dotenv from 'dotenv'

import Random from "./src/math/Random.js"
import stdic from "./src/stdic/index.js"
import words from "./src/words/index.js"

dotenv.config()

export default {
    Random,
    stdic,
    words
}