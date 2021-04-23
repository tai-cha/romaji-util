import {VOWELS, replaceChar, removeChar} from '../string_utils.js'
import Kana from '../kana.js'
import Romaji from './romaji_base.js'
class DictItem {
    constructor(hiragana, katakana, romaji) {
        this.hiragana = hiragana
        this.katakana = katakana
        this.romaji = romaji
        this.vowel = !!VOWELS.includes(romaji)
    }
}

const dict_base = [["あ", "ア", "A"], ["い", "イ", "I"], ["う", "ウ", "U"], ["え", "エ", "E"], ["お", "オ", "O"], ["か", "カ", "KA"], ["き", "キ", "KI"], ["く", "ク", "KU"], ["け", "ケ", "KE"], ["こ", "コ", "KO"], ["さ", "サ", "SA"], ["し", "シ", "SHI"], ["す", "ス", "SU"], ["せ", "セ", "SE"], ["そ", "ソ", "SO"], ["た", "タ", "TA"], ["ち", "チ", "CHI"], ["つ", "ツ", "TSU"], ["て", "テ", "TE"], ["と", "ト", "TO"], ["な", "ナ", "NA"], ["に", "ニ", "NI"], ["ぬ", "ヌ", "NU"], ["ね", "ネ", "NE"], ["の", "ノ", "NO"], ["は", "ハ", "HA"], ["ひ", "ヒ", "HI"], ["ふ", "フ", "FU"], ["へ", "ヘ", "HE"], ["ほ", "ホ", "HO"], ["ま", "マ", "MA"], ["み", "ミ", "MI"], ["む", "ム", "MU"], ["め", "メ", "ME"], ["も", "モ", "MO"], ["や", "ヤ", "YA"], ["ゆ", "ユ", "YU"], ["よ", "ヨ", "YO"], ["ら", "ラ", "RA"], ["り", "リ", "RI"], ["る", "ル", "RU"], ["れ", "レ", "RE"], ["ろ", "ロ", "RO"], ["わ", "ワ", "WA"], ["ゐ", "ヰ", "I"], ["ゑ", "ヱ", "E"], ["を", "ヲ", "O"], ["ん", "ン", "N"], ["が", "ガ", "GA"], ["ぎ", "ギ", "GI"], ["ぐ", "グ", "GU"], ["げ", "ゲ", "GE"], ["ご", "ゴ", "GO"], ["ざ", "ザ", "ZA"], ["じ", "ジ", "JI"], ["ず", "ズ", "ZU"], ["ぜ", "ゼ", "ZE"], ["ぞ", "ゾ", "ZO"], ["だ", "ダ", "DA"], ["ぢ", "ヂ", "JI"], ["づ", "ヅ", "ZU"], ["で", "デ", "DE"], ["ど", "ド", "DO"], ["ば", "バ", "BA"], ["び", "ビ", "BI"], ["ぶ", "ブ", "BU"], ["べ", "ベ", "BE"], ["ぼ", "ボ", "BO"], ["ぱ", "パ", "PA"], ["ぴ", "ピ", "PI"], ["ぷ", "プ", "PU"], ["ぺ", "ペ", "PE"], ["ぽ", "ポ", "PO"], ["きゃ", "キャ", "KYA"], ["きゅ", "キュ", "KYU"], ["きょ", "キョ", "KYO"], ["しゃ", "シャ", "SHA"], ["しゅ", "シュ", "SHU"], ["しょ", "ショ", "SHO"], ["ちゃ", "チャ", "CHA"], ["ちゅ", "チュ", "CHU"], ["ちょ", "チョ", "CHO"], ["にゃ", "ニャ", "NYA"], ["にゅ", "ニュ", "NYU"], ["にょ", "ニョ", "NYO"], ["ひゃ", "ヒャ", "HYA"], ["ひゅ", "ヒュ", "HYU"], ["ひょ", "ヒョ", "HYO"], ["みゃ", "ミャ", "MYA"], ["みゅ", "ミュ", "MYU"], ["みょ", "ミョ", "MYO"], ["りゃ", "リャ", "RYA"], ["りゅ", "リュ", "RYU"], ["りょ", "リョ", "RYO"], ["ぎゃ", "ギャ", "GYA"], ["ぎゅ", "ギュ", "GYU"], ["ぎょ", "ギョ", "GYO"], ["じゃ", "ジャ", "JA"], ["じゅ", "ジュ", "JU"], ["じょ", "ジョ", "JO"], ["びゃ", "ビャ", "BYA"], ["びゅ", "ビュ", "BYU"], ["びょ", "ビョ", "BYO"], ["ぴゃ", "ピャ", "PYA"], ["ぴゅ", "ピュ", "PYU"], ["ぴょ", "ピョ", "PYO"], ["しぇ", "シェ", "SHIE"], ["ちぇ", "チェ", "CHIE"], ["てぃ", "ティ", "TEI"], ["にぃ", "ニィ", "NII"], ["にぇ", "ニェ", "NIE"], ["ふぁ", "ファ", "FUA"], ["ふぃ", "フィ", "FUI"], ["ふぇ", "フェ", "FUE"], ["ふぉ", "フォ", "FUO"], ["じぇ", "ジェ", "JIE"], ["でぃ", "ディ", "DEI"], ["でゅ", "デュ", "DEYU"], ["うぃ", "ウィ", "UI"], ["うぇ", "ウェ", "UE"], ["うぉ", "ウォ", "UO"], ["ゔぁ", "ヴァ", "BA"], ["ゔぃ", "ヴィ", "BI"], ["ゔ", "ヴ", "BU"], ["ゔぇ", "ヴェ", "BE"], ["ゔぉ", "ヴォ", "BO"], ["ゔぁ", "ヴァ", "BUA"], ["ゔぃ", "ヴィ", "BUI"], ["ゔぇ", "ヴェ", "BUE"], ["ゔぉ", "ヴォ", "BUO"]];
export const HEBON_TABLE = dict_base.map(item => new DictItem(item[0], item[1], item[2]))
const SORTED_HEBON_TABLE = HEBON_TABLE.sort((a, b) => b.hiragana.length - a.hiragana.length)

class Hebon extends Romaji {
    static fromKana = (kana, options={}) => {
        let result = String(kana.value)
        // 表に従って置換する
        SORTED_HEBON_TABLE.forEach(str => {
            if (str['hiragana'] != 'ん') {
                while (result.includes(str.hiragana)) {
                    result = result.replace(str.hiragana, str.romaji)
                }
                while (result.includes(str.katakana)) {
                    result = result.replace(str.katakana, str.romaji)
                }
            }
        })
        //1文字づつ残りを処理
        for (let i = 0; i < result.length; i++) {
            //撥音の処理
            if (['ん', 'ン'].includes(result[i])) {
                if (i < result.length - 1 && ['B', 'M', 'P'].includes(result[i + 1])) {
                    result = replaceChar(result, i, 'M')
                } else if (i < result.length - 1 && ['Y'].concat(VOWELS).includes(result[i + 1])) {
                    result = replaceChar(result, i, "N'")
                } else {
                    result = replaceChar(result, i, 'N')
                }
            }
    
            //促音の処理
            if (["っ", "ッ"].includes(result[i])) {
                if (i == result.length - 1 || ["っ", "ッ"].concat(VOWELS).includes(result[i + 1])) {
                    if (i > 0 && result[i - 1] === "'") {
                        result = removeChar(result, i)
                        i--
                    } else {
                        result = replaceChar(result, i, "'")
                    }
                } else {
                    if (i > 0 && result[i - 1] === "'") {
                        result = removeChar(result, 1)
                        i--
                    }
                    result = replaceChar(result, i, result[i + 1])
                }
            }
        }
        return new this(result)
    }

    toKana() {
        let result = String(this.value)
        HEBON_TABLE
            .sort((a, b)=> b.romaji.length - a.romaji.length)
            .forEach(item => {
                        while (result.includes(item.romaji)) {
                            result = result.replace(item.romaji, item.hiragana)
                        }
        })
        return new Kana(result)
    }

    static toKana = string => (new this(string)).toKana()
}

export default Hebon