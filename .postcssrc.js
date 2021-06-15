// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
        // browsers: ['> 0.5%', 'last 3 versions'] 
        browsers: ['> 0.5%', 'last 2 versions', 'ie > 8']
        // browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead'] // default
    }
  }
}
