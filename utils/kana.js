import Hebon from './romaji/hebon.js'

class Kana {
    constructor(val){
        this.value = String(val)
    }
    toRomaji(type="hebon", options={}) {
        if (type == "hebon") {
            return Hebon.fromKana(this, options)
        }
    }
    static toRomaji = string => (new this(string)).toRomaji()
}
export default Kana