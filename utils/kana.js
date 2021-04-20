import HEBON_TABLE from './hebon.js'
const SORTED_HEBON_TABLE = HEBON_TABLE.sort((a, b) =>b[0].length - a[0].length)
const VOWELS = ['A', 'E', 'I', 'O', 'U']
const replaceChar = (target, position, char) => {
    return target.slice(0, position) + char + target.slice(position + 1)
}
const removeChar = (target, position) => {
    return target.slice(0, position) + target.slice(position + 1)
}

class Kana {
    constructor(val){
        this.value = String(val)
    }
    toRomaji(type="hebon", option={}) {
        let result = String(this.value)
        if (type === "hebon") {
            // 表に従って置換する
            SORTED_HEBON_TABLE.forEach(str=>{
                if (str[0] != 'ん') {
                    while(result.includes(str[0])) {
                        result = result.replace(str[0], str[2])
                    }
                    while(result.includes(str[1])) {
                        result = result.replace(str[1], str[2])
                    }
                }
            })
            //1文字づつ残りを処理
            for(let i=0;i<result.length;i++){
                //撥音の処理
                if (['ん', 'ン'].includes(result[i])) {
                    if(i < result.length - 1 && ['B', 'M', 'P'].includes(result[i+1])){
                        result = replaceChar(result, i, 'M')
                    } else if (i < result.length - 1 && ['Y'].concat(VOWELS).includes(result[i+1])) {
                        result = replaceChar(result, i, "N'")
                    } else {
                        result = replaceChar(result, i, 'N')
                    }
                }

                //促音の処理
                if(["っ", "ッ"].includes(result[i])) {
                    if (i == result.length - 1 || ["っ", "ッ"].concat(VOWELS).includes(result[i+1])) {
                        if (i > 0 && result[i-1]==="'"){
                            result = removeChar(result, i)
                            i--
                        } else {
                            result = replaceChar(result, i, "'")
                        }
                    } else {
                        if (i > 0 && result[i-1]==="'"){
                            result = removeChar(result, 1)
                            i--
                        }
                        result = replaceChar(result, i, result[i+1])
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