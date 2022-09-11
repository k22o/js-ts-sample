const path = require('path');
 
module.exports = {
    // スタートポイント (モジュールの依存関係解消のスタート,メインファイル)
    entry: {
        main: './src/main1.js',
        main2: './src/main2.js'
    },
    // 出力先設定
    output: {
        filename: '[name].bundle.js',　//出力するファイル名。[name]には、エントリ名が入る
        path: path.resolve(__dirname, 'dist'), //出力先の絶対パス
        clean: false //出力先のディレクトリ内のものを全て消してからoutputを作成する
    },
    // webpack-dev-server の設定
    devServer: {  
        static: {
            directory: __dirname
        },
        host: '127.0.0.1',
        port: 8080,
        open: true //自動オープン
    },

    // moduleの設定
    module: {
        // ローダーの設定
        rules: [
            {
                test: /\.js$/, // 対象ファイル
                exclude: /node_modules/, // 対象から外すファイル
                use: [
                    {
                        loader: 'babel-loader', //　利用するローダー
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }  
                    }
                ] 
            }
        ]
    }
};