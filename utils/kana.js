import HEBON_TABLE from './hebon.js'
const SORTED_HEBON_TABLE = HEBON_TABLE.sort((a, b) =>b[0].length - a[0].length)
class Kana {
    constructor(val){
        this.value = String(val)
    }
    toRomaji(type="hebon") {
        let result = String(this.value)
        if (type === "hebon") {
            // 表に従って置換する
            SORTED_HEBON_TABLE.forEach(str=>{
                if(result.includes(str[0])){
                    result = result.replace(str[0], str[2])
                }
                if(result.includes(str[1])) {
                    result = result.replace(str[1], str[2])
                }
            })
            // 促音の処理
            for(let i=0;i<result.length;i++){
                if(["っ", "ッ"].includes(result[i])) {
                    if (i == result.length - 1 || ["っ", "ッ"].includes(result[i+1])) {
                        //TODO: 文字列の最後、あるいは最後の文字列が連続して促音になる場合の処理
                    } else {
                        let tmp_a = result.slice(0, i)
                        let tmp_b = result.slice(i+1)
                        result = tmp_a + result[i+1] + tmp_b
                    }
                }
            }
            return result
        }
    }
    static toRomaji = string => (new Kana(string)).toRomaji()
}
Object.defineProperty(Kana, 'get', ()=>Kana)
export default Kana