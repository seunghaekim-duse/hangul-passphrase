import { program } from 'commander'
import main from './main.js'

program
    .option('--length <int>', 'length of passphrase', 3)
    .option('--count [int]', 'count of passphrase', 1)
    .option("--init")
    .parse(process.argv)

const opts = program.opts()

if (opts.init) {
    main.stdic.create()
    process.exit(1)
}

const words = await main.words.words()

for(let i = 0; i < opts.count; i++) {
    const random = new main.Random(words.length, opts.length)
    const passphrase = await main.words.passphrase(random.array())
    console.log(passphrase)
}