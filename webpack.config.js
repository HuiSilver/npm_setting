const path = require('path');
const webpack = require('webpack');//웹팩이 제공하는 플러그인
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//default export로 되어 있지 않아서 {~} 이렇게 가져와야 한다.
const { CleanWebpackplugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main:'./src/app.js'
    },
    output:{
        //절대경로
        path: path.resolve('./dist'),
        filename:'[name].js',
    },
    module:{
        rules:[
            {
                //로더가 처리해야할 파일들의 패턴(정규식)
                test:/\.css$/,
                use: [
                    process.env.NODE_ENV === 'production'?MiniCssExtractPlugin.loader:'style-loader',
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
            },
        ]
    },
    plugins:[
        new webpack.BannerPlin({
            banner:`
                Build Date: ${new Date().toLocaleTimeString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Author: ${childProcess.execc('git config user.name')}
            `
        }),
        new webpack.DefinePlugin({
            TWO : '1+1'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                env: process.env.NODE_ENV === 'development'? '(개발용)' :''
            },
            minify:process.env.NODE_ENV === 'production'? {
                //빈칸 제거
                collapseWhitespace: true,
                //주석 제거
                removeComments: true
            } : false
        }),
        new CleanWebpackplugin(),
        ...(process.env.NODE_ENV === 'production'?[new MiniCssExtractPlugin({
            filename:'[name].css'
        })]:[])
    ]
}