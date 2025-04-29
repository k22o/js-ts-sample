# 非同期処理

## 非同期フロー制御

Javascriptの非同期処理の実装の種類は以下が上げられる。

- calback function (callback.js)
- promise (promise.js)
- async/await

これらの違いはいかの通り。

- callbackが最も原始的な方法であるが、所謂「コールバック地獄」に陥りやすい
- promiseを使うことで、順序だてた処理が必要な場合に、`.then` を用いることで、順序だった書き方をすることができるようになった
- 更に、async awaitを使うことで、かなり同期処理チックにかくことができる。ただしasync awaitにはいくつか注意するポイントがある
  - async関数の戻り値は、自動でPromiseになる
  - awaitはasync関数内でのみ利用できる
　- ESMモジュールではTop Level Awaitが利用できる
    - 関数でない部分でもawaitができる、ということ

## イベント駆動型の非同期フロー

- Callbackは処理の終了というイベントをトリガーとするが、EventEmitterやstreamは処理の開始や途中など、様々なタイミングをトリガーにできる。
- streamを使わない場合、大きいファイルをまとめて読み込んだ後に処理する必要がある
- streamを使う場合、読み込んだ一部分から逐次処理に回すことができる

以下の利点が挙げられる。

- 巨大なデータを小さなメモリで扱える（ファイル、動画、ログなど）
- リアルタイム処理に向いている（チャット、音声通話など）
- パイプライン構成ができ、処理を組み合わせられる
- **遅延処理（Lazy Processing）**なので高速

EventEmitterとstreamの違いは、

- EventEmitter: イベント通知全般に使える
- stream: EventEmitterを継承して、IO処理に特化したもの

## Async Iterator

stream処理は、async-awaitと一緒に使ったり、エラーハンドリングを組み込むことが難しい場合がある。
Async Iteratorはこれを解決する。

## 各手法とエラーハンドリング方法

| 手法 | エラーハンドリング |
| --- | --- |
| 同期的記述 | try-catch |
| callback | if (err) |
| eventEmitter, stream | emitter.on("error") |
| async-await | try-catch, .catch() |
| async-iterator | try-catch, .catch() |
