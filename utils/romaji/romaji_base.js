import Kana from "../kana.js"

class Romaji {
    constructor(string) {
        this.value = string
    }

    static fromKana(kana, options={}) {
        return ''
    }

    toKana() {
        return new Kana('')
    }
    
    static toKana = string => (new this(string)).toKana()
}

export default Romaji