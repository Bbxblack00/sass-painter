let mix = require('laravel-mix');

mix
  .js('src/app.js', 'dist')
  .sass('src/style.scss', '', {
    processUrls: true,
  })
  .setPublicPath('dist')
  .copy('src/index.html', 'dist');
