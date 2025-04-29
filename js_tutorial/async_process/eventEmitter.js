const EventEmitter = require('events');

// インスタンスを作成
const myEmitter = new EventEmitter();
let count = 0;


// イベントリスナーを登録
// 何回でも発火する
myEmitter.on('increment', () => {
    count++;
    console.log(`カウント: ${count}`);
});
// 1回だけ呼ばれる
myEmitter.once('hello', () => {
    console.log('一度だけ呼ばれる！');
});

myEmitter.emit('increment');
myEmitter.emit('increment');
myEmitter.emit('increment');

myEmitter.emit('hello');