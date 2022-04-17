## react-native-template 
- reactnative dva axios antd-rn @react-navigation/native lottie


## 安卓打包
```js
# 参照官网
https://www.react-native.cn/docs/signed-apk-android
问题: 生成密匙 由于我的版本是中文的 所以最后输入 是 (不能是yes)
# 下载gradle
brew install gradle
export JAVA_HOME=$(/usr/libexec/java_home)
# 生成apk
./gradlew assembleRelease  // apk
需要等待的时间比较久 20分钟
```