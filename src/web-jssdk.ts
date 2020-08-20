import './high-level-syntax-shim'
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class DummyClass {
  readonly name: string
  constructor (name: string) {
    this.name = name
  }

  getPromise () {
    return new Promise((resolve, reject) => {
      const arr = [1, 3, 5]
      resolve(arr.find(i => i > 3))
    })
  }
}
