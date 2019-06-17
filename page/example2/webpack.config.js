const path = require('path');
module.exports = {
    entry: ['./js/main.js', './css/all.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    watch: true   // 监听修改自动打包
};