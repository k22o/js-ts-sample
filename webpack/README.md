# Webpack
- jsのモジュールバンドラー (複数をまとめてくれる)
- loaderを導入することで、cssや画像ファイルなどの変換も行うことができる

## インストール
通常通り、下記を実行
```
npm install
```

(備考)
```
$ npm init
$ npm install --dev webpack webpack-cli webpack-dev-server
$ npm install --dev babel-loader @babel/core @babel/preset-env // babelも合わせて適用するため
```

## 設定
- webpack.config.jsを作成
- package.jsonに、`build: webpack`を記入
    - `npm run build` で実行できる
    - 本設定では、更にアレンジしている(後述)

## 実行
- `npm run build` :開発モード (`--mode development`) でビルド
- `npm run prod` :本番モード (`--mode production`) でビルド
- `npm run watch` :開発モードかつwatch機能付き (`--watch`) でビルド
- `npm run start-dev` :webpack-dev-serverを起動


## 参考文献
- https://www.webdesignleaves.com/pr/jquery/webpack_basic_01.html
- https://qiita.com/howdy39/items/48d85c430f90a21075cd
- https://webpack.js.org/concepts/
- https://zenn.dev/antez/articles/58307946cf4f3e