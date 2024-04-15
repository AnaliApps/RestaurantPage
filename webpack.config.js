const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
        index: './src/index.js'
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    plugins:[
        new HtmlWepackPlugin({
            filename:"index.html",
            title:'Restaurant Page',
            template:"/src/index.html",
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            }
        ]
    }
};