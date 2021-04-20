import Kana from './utils/kana.js'
class RomajiUtil {
    static Kana = Kana
}
export default RomajiUtil

const example = new RomajiUtil.Kana("あいうえお")
console.log(example.toRomaji())
console.log(RomajiUtil.Kana.toRomaji("テストにこめ"))