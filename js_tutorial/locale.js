// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl


// ロケール識別子
// 完全版１
const korea = new Intl.Locale('ko', {
    script: 'Kore', region: 'KR', hourCycle: 'h24', calendar: 'gregory'
});
console.log(korea.baseName, korea.hourCycle);
  
// 完全版2
const japan = new Intl.Locale('ja-Jpan-JP-u-ca-japanese-hc-h12');  
console.log(japan.baseName, japan.hourCycle);
  
// 簡易版
const us = new Intl.Locale('en-US');
console.log(us.baseName, us.hourCycle)