const path = require('path'),
    fs = require('fs');

let workers = fs.readdirSync(path.join(__dirname, './src'));
workers = workers.filter(worker => !worker.includes('.'));

workers = workers.map(folder => {
    const files = fs.readdirSync(path.join(__dirname, './src', folder));
    let file;

    if (files.includes('index.jsx')) file = 'index.jsx';
    if (files.includes('index.tsx')) file = 'index.tsx';
    if (files.includes('index.ts')) file = 'index.ts';
    if (files.includes('index.js')) file = 'index.js';

    return {
        folder,
        file,
    }
});

workers = workers.map(({folder, file}) => ({
    watch: false,
    entry: `./src/${folder}/${file}`,
    target: 'node',
    output: {
        filename: `${folder}.js`,
        path: path.resolve(__dirname, 'build'),
        publicPath: "/"
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}));

module.exports = workers;
