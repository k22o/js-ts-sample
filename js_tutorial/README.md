# ノウハウ

## モジュール化

| 仕様 | 書き方 | 利用事例 |
| --- | --- | --- |
| ECM (ECMAScript) | import/export | ブラウザ側, node.js |
| CJS (CommonJS) | require/module.exports| node.js |

## アラカルト

### 即時関数

- 関数を定義すると同時に実行する
- https://qiita.com/katsukii/items/cfe9fd968ba0db603b1e

```
// 基本は、(function(引数){実行内容}(代入値));
(function (param) {
    console.log(param)
}("input-param"));
```

- 一番外の`()`の代わりに`!`や`+`が用いられる
- https://www.koikikukan.com/archives/2013/06/12-003333.php

### HTTPリクエスト

大きく分けて、`fetch` と `xmlHttpRequest` があるが、新しい方の`fetch`を使いましょう
