class MyWebpackPlugin {
    apply(compiler) {
      compiler.hooks.done.tap("My Plugin", stats => {
        //플러그인이 완료 됐을때 동작하는 콜백함수
        console.log("MyPlugin: done")
      })
    }
  }
  
  module.exports = MyWebpackPlugin