## 金蛋理财 Vue UI 组件库 jdvue

1. 样式都是全局引入，目前未提取到每个单个组件中
2. 单个引入的时候用Vue.component(Toast.name, Toast)注册组件方式  还未使用Vue.use()
3. 持续优化中...

## Install

下载包

```bash
yarn jdvue -S
或者
cnpm i jdvue -S
```

## Quick Start

全局引入

```js
import 'jdvue/lib/index.css'
import jdvue from 'jdvue'
Vue.use(jdvue)
```

单个引入

```js
import 'jdvue/lib/index.css'
import { Toast } from 'jdvue'
Vue.component(Toast.name, Toast)

.babelrc 文件配置增加以下代码

"plugins": [["import", {
    "libraryName": "jdvue",
    "libraryDirectory": "src/components"
}]]
```

## Links
- [代码库地址](https://github.com/cjm0/jdvue)
