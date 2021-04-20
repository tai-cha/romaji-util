# romaji-util
romaji-utilはひらがな/カタカナとローマ字感の変換をよしなにしてくれるライブラリです。
現在はひらがな・カタカナから **（ヘボン式）** ローマ字に変換する機能が不完全に実装されています。
またコマンドライン実行を行うと現在はかなからローマ字変換が試せます。

## かな⇛ローマ字変換
ひらがな/カタカナで書かれた文字列をローマ字に変換します。
```javascript
import RomajiUtil from 'romaji-util'

RomajiUtil.Kana.toRomaji('変換したいテキスト')
```
OR
```javascript
import RomajiUtil from 'romaji-util'

(new RomajiUtil.Kana('変換したいテキスト')).toRomaji()
```

## コマンドライン実行での使い方(α)
**予告なく使用方法は変更になる場合があります**
```bash
$ node index.js かなからローマじにへんかんしたいテキスト
```