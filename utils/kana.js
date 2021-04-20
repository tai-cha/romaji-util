import HEBON_TABLE from './hebon.js'
const SORTED_HEBON_TABLE = HEBON_TABLE.sort((a, b) =>b[0].length - a[0].length)
class Kana {
    constructor(val){
        this.value = String(val)
    }
    toRomaji() {
        let result = String(this.value)
        SORTED_HEBON_TABLE.forEach(str=>{
            if(result.includes(str[0])){
                result = result.replace(str[0], str[2])
            }
            if(result.includes(str[1])) {
               result = result.replace(str[1], str[2])
            }
        })
        return result
    }
    static toRomaji = string => (new Kana(string)).toRomaji()
}
Object.defineProperty(Kana, 'get', ()=>Kana)
export default Kana