# ディレクトリ構成
- src: tsファイル
- dist: 変換後のjsファイル
- tsconfig.json: 変換時のルールを定める
- .eslitrc.json: eslintの設定
- gulpfile.js: gulpの設定

# コンパイル方法
## tscを利用したコンパイル
```
tsc hoge.ts
```

## gulpを利用したコンパイル
```
gulp build
```
もしくは
```
gulp // これでwatchが開始される
```
はずなんだが、WSL環境で動かしているのでwatchが機能せず。

- tsconfig.jsonを読み込んで、gulpを実行している
- こっちを使えばeslintが機能する

# 環境構築
(1) gulpをグローバルにインストールする。インストール済みなら不要

```
$ npm install -g gulp-cli
$ gulp --version
```

(2) コマンドラインから実行したいなら、typescriptをグローバルにインストール
```
$ npm install -g typescript # インストールしていないなら実行
$ tsc --version
```

(3) 各種ライブラリのインストール
```
$ npm install
```

# 参考
- https://zenn.dev/januswel/articles/402774d76424e71ac906