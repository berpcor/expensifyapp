// Where entry point is?
// Загрузка модуля node path, чтобы иметь возможность оперировать путями,
// выполнять конкатенацию строк в путь.
const path = require('path');


module.exports = {
   entry: './src/app.js',
   output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
   }, 
   // Loader
   module: {
       rules: [{
           loader: 'babel-loader',
           test: /\.js$/,
           exclude: /node_modules/
       }, {
           test: /\.s?css$/,
           use: [ 'style-loader', 'css-loader', 'sass-loader' ]
       }]
   },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public",),
        historyApiFallback: true
    }
};