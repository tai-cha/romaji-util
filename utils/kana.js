import Hebon from './hebon.js'

const VOWELS = ['A', 'E', 'I', 'O', 'U']


class Kana {
    constructor(val){
        this.value = String(val)
    }
    toRomaji(type="hebon", options={}) {
        if (type == "hebon") {
            return Hebon.fromKana(this)
        }
    }
    static toRomaji = string => (new Kana(string)).toRomaji()
}
export default Kana