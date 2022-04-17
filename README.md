## react-native-template 
- dva axios react-native @react-navigation/native lottie

## 基本环境的安装
```js
# 计算机系统: macos
# 具体流程: 参考官网
https://www.react-native.cn/docs/environment-setup
# 安装过程中遇到的问题: 指定镜像(必须 或者自己代理)
https://www.jianshu.com/p/412d760bcacd
# 其他bug
- yarn ios 后没有app
sudo chown -R myUserName ~/react_native_project
- 运行报错
端口在运行了 杀下端口
- react-native-config 安卓 Config对象是空的
需要按照文档额外配置 resValue
```

## 调试
```js
# vscode 安装 react native tools 插件
# brew 安装集成的调试插件 
brew install --cask react-native-debugger
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
注意: react调试工具按照 react-native-debugger 提示的版本 安装全局的 
如果显示有bug 查看github isszue
```

### 其他调试方法的集成细节
```js
# 语法提示
npm install --save @types/react-native
根目录构建tsconfig.json文件
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": [
      "es6"
    ],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
# 刷新模拟器 
1.按两下 R || r 快速刷新
2.command+R || command+D  => reload
# element调试
commend+d => show Inspector => 点击元素
# console.log
1.yarn ios 运行的终端那里可以看到 console.log()的输出
2.command+D => Debug with Chrome => 切换到console界面 => 将top切换为 debug...
3.react native debugger 应用
# react 调试工具
npm i -g react-devtools@^4.13.0
终端输入 react-devtools
在模拟器刷新后 react-devtools 就有内容了
# 网络请求
1.brew install --cask react-native-debugger
如果没开启 鼠标在react调试工具Hover 右键开启network
2.vscode 调试工具查看网络请求
# 真机调试
```