import Kana from './utils/kana.js'
import Hebon from './utils/romaji/hebon.js'
export default class RomajiUtil {
    static Kana = Kana
    static Hebon = Hebon
}

if(process.argv.length > 3) {
    if(process.argv[2] == "romaji") {
        console.log(RomajiUtil.Kana.toRomaji(process.argv.slice(3).join(' ')).value)
    } else if (process.argv[2] == "kana") {
        console.log(RomajiUtil.Hebon.toKana(process.argv.slice(3).join(' ')).value)
    }
} else {
    console.error('You cannot excecute this script without argument.')
}