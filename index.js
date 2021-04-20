import Kana from './utils/kana.js'
class RomajiUtil {
    static Kana = Kana
}
export default RomajiUtil

if(process.argv.length > 2) {
    console.log(RomajiUtil.Kana.toRomaji(process.argv.slice(2).join(' ')))
} else {
    console.error('You cannot excecute this script without argument.')
}