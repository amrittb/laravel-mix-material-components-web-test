let mix = require('laravel-mix');

const ASSET_DIR =  'assets/';
const OUTPUT_DIR = 'public/build/';
const JS_DIR = "js/";
const CSS_DIR = "css/";

mix.js(ASSET_DIR + JS_DIR + 'app.js', OUTPUT_DIR + JS_DIR)
    .sass(ASSET_DIR + CSS_DIR + 'app.scss', OUTPUT_DIR + CSS_DIR, {
        includePaths: ['node_modules'],
    })
    .options({
        processCssUrls: false
    });