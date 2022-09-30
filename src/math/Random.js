export default class Random {

    constructor (maxInt, arrayLength = 3) {
        this.maxInt = maxInt
        this.arrayLength = arrayLength
    }
    
    number () {
        return Math.floor(Math.random() * (this.maxInt - 0 + 1))
    }

    array () {
        return Array(this.arrayLength).fill().map(() => this.number())
    }
}