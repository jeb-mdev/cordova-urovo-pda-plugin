# cordova-urovo-pda-plugin

🎉🎉🎉 基于 cordova 开发的 PDA 扫描插件

## 前言

PDA 扫码相对于调用摄像头扫码有诸多优点: 1. 支持多样化的二维码以及条形码设置 2.扫码响应速度快 3.扫码稳定等等。本插件是基于 cordova 项目构建的,因此你可以通过 `cordova plugin add XXX`导入到你的插件列表中。

### 如何安装

- ` cordova plugin add https://github.com/sixiaodong123/cordova-urovo-pda-plugin`

  假如你安装好了，你可以通过`cordova plugin list`查看到此插件。

### 如何使用

```js
window.cordova.define.moduleMap['scanPda.scanPda'].exports.handleScanResult(
  'start',
  function (params) {
    alert(params)
  }
)
```

⚡⚡⚡ 注意: 可能不同的项目`define.moduleMap['scanPda.scanPda']`这里会不一样,我们可以调试的时候在浏览器输出 cordova, 然后一层一层点进去即可。

### FAQ

##### 这里有几个点需要注意点一下

- lib/andorid 目录下的 jar 包很关键, 下面两个类就是这个 jar 包获取的(andoroid 3 以后似乎默认不支持 android.device.)
  ```java
  import android.device.ScanManager;
  import android.device.scanner.configuration.PropertyID;
  ```
- scnaPda.java 中的`SCAN_ACTION`是我们在 PDA 中自定义的动作,使用的时候最好校对一下值是否匹配。
