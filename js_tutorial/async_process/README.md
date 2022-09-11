## 非同期処理
Javascriptの非同期処理の実装の種類：
- calback function (callback.js)
- promise (promise.js)
- async/await

特徴：
- callbackが最も原始的な方法であるが、所謂「コールバック地獄」に陥りやすい。<br>
- promiseを使うことで、順序だてた処理が必要な場合に、`.then` を用いることで、順序だった書き方をすることができる。<br>
- 更に、async awaitを使うことで、かなり同期処理チックにかくことができる。ただしasync awaitにはいくつか注意するポイントがある。
   - async関数の戻り値は、自動でPromiseになる
   - awaitはasync関数内でのみ利用できる


## 参考になるページ
- https://qiita.com/suin/items/97041d3e0691c12f4974
