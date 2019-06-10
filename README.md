# mgd-localstorage

## Install

```shell
npm install mingedou-l-st --save-dev
```

## Use

```shell
import $WMls from 'mingedou-l-st'
Vue.use($WMls)
```

```shell
this.$WMls.set('abc', 'lllll', 60 * 60 * 1000)
this.$WMls.get('abc')
this.$WMls.remove('abc')
this.$WMls.key(0)
```
<!-- 
##this.$WMls.set('abc', 'lllll', 60 * 60 * 1000)
##this.$WMls.get('abc')
##this.$WMls.remove('abc')
##this.$WMls.key(0) -->


[npm-image]: https://img.shields.io/npm/v/markdownlint.svg
[npm-url]: https://www.npmjs.com/package/markdownlint
[travis-image]: https://img.shields.io/travis/DavidAnson/markdownlint/master.svg
[travis-url]: https://travis-ci.org/DavidAnson/markdownlint
[coveralls-image]: https://img.shields.io/coveralls/DavidAnson/markdownlint/master.svg
[coveralls-url]: https://coveralls.io/r/DavidAnson/markdownlint
[license-image]: https://img.shields.io/npm/l/markdownlint.svg
[license-url]: https://opensource.org/licenses/MIT
