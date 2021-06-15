<!-- 
# Markdown 语法
    # a         标题

    - a     无序列表
    1. a    有序列表

    ![]()   插入图片 文字+地址
    []()    插入链接

    `a`     代码
    ```
        a   代码块
    ```
    > a     引用

    *a*       斜体
    **a**     粗体
    ***a***     斜体加粗

    ***         分割线 
    行尾添加两个空格加回车表示换行
    定义脚注[^1]
-->


### 金蛋理财 Vue UI 组件库 jdvue
1. 样式都是全局引入，目前未提取到每个单个组件中
2. 单个引入的时候用Vue.component(Toast.name, Toast)注册组件方式  还未使用Vue.use()
3. 持续优化中...


### Install
下载包
```bash
yarn jdvue -S 
或者
cnpm i jdvue -S
```


### Quick Start
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


### Links
- [网站地址](https://bm.jindanlicai.com)
- [代码库地址](https://gitee.com/cjm0/jdvue)  


