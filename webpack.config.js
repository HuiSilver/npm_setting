const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main:'./src/app.js'
    },
    output:{
        //절대경로
        path: path.resolve('./dist'),
        filename:'[name].js',
        publicPath:'./dist/',
        assetModuleFileName: pathData => {
            const filePath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filePath}/[name].[hash][ext][query]`;
        }
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
    }
}