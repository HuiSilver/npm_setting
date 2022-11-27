const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main:'./src/app.js'
    },
    output:{
        //절대경로
        path: path.resolve('./dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                //로더가 처리해야할 파일들의 패턴(정규식)
                test:/\.js$/,
                use: [
                    path.resolve('./my-webpack-loader.js')
                ]
            }
        ]
    }
}