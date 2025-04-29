const fs = require('fs');
const zlib = require('zlib'); // gzip圧縮ライブラリ

const readStream = fs.createReadStream('input.txt');
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream('output.txt.gz');

// 読み込み → 圧縮 → 書き込み
readStream
  .pipe(gzipStream)
  .pipe(writeStream);

// streamには、"on"で、どういったイベントの際に処理を発火させるか記述する
// 以下の例だと、finish の際に処理が発火する。
writeStream.on('finish', () => {
  console.log('ファイルがgzip圧縮されました。');
});

