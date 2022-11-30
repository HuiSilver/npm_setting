const path = require('path');
const webpack = require('webpack');//웹팩이 제공하는 플러그인
const childProcess = require('child_process');


module.exports = {
    mode: 'development',
    entry:{
        main:'./src/app.js'
    },
    output:{
        //절대경로
        path: path.resolve('./dist'),
        filename:'[name].js',
        publicPath:'./dist/'
    },
    module:{
        rules:[
            {
                //로더가 처리해야할 파일들의 패턴(정규식)
                test:/\.css$/,
                use: [
                'style-loader',
                 'css-loader'
                ]
            },
            {
                test:/\.png$/,
                loader:'file-loader',
                options: {
                    publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
                    name: "[name].[ext]?[hash]", // 파일명 형식
                  },
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner:`
                Build Date: ${new Date().toLocaleTimeString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Author: ${childProcess.execSync('git config user.name')}
            `
        }),
        new webpack.DefinePlugin({
            TWO : '1+1'
        })
    ]
}