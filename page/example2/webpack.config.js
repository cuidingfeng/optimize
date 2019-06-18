const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: ['./js/main.js', './css/all.js'],
    mode: "production",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            }
        ]

    },
    plugins: [
        new uglify()
    ],
    watch: true   // 监听修改自动打包
};