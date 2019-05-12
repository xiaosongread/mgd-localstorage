/*
**  this.$WMls.set('abc', 'lllll', 60 * 60 * 1000)
**  this.$WMls.get('abc')
**  this.$WMls.remove('abc')
**  this.$WMls.key(0)
*/
class $WMls {
  constructor() {
    this.storage = window.localStorage
    this.length = this.storage.length
    this.clear()
  }

  install(Vue) {
    Vue.prototype.$WMls = this
  }
  /*
  ** @expire The time stamp (ms)
  */
  set(key, value, expire = 0) {
    var data = JSON.stringify({
      value: value,
      expire: expire > 0 ? new Date().getTime() + expire : expire
    })
    this.storage.setItem('WM-' + key, data)
  }

  get(key) {
    this.clear()
    const item = JSON.parse(this.storage.getItem('WM-' + key)).value
    return item
  }

  remove(key) {
    this.storage.removeItem('WM-' + key)
  }

  key(index) {
    return this.storage.key(index)
  }

  clear() {
    if (this.length === 0) {
      return
    }

    for (let i = 0; i < this.length; i++) {
      const key = this.storage.key(i)
      if (/WM-/i.test(key) === false) {
        continue
      }
      const current = JSON.parse(this.storage.getItem(key))

      if (current.expire > 0 && current.expire < new Date().getTime()) {
        this.storage.removeItem(key)
      }
    }
  }
}

export default new $WMls()
