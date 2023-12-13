---
title: vite的初次体验
date: 2021-04-18 16:33:59
tags: 
  - 前端
author: willwang
location: hunan
img: 
---
## vite是什么？
微博上面关注了尤大大的微博，在2020年年末吧，建了开发的Web开发构建工具---vite。在2021年2月的时候发部了2.0版本:zap:，
<!-- more -->
此次版本带来更多的体验，本次我为了测试通过vite体验vue2的项目，所以目前给我的体验点以下：
+ 极速的服务启动
    使用原生 ESM （ES 模块，JavaScript模块）文件，无需打包。
+ 轻量快速的热重载
    极快的模块热重载（HMR）
+ 优化的构建
    可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建。
+ 多框架支持
    提供官方的 Vue, React, Preact, Lit Element 项目模版。
+ 更好的 CSS 支持
    自动 URL 改写：所有 url() 路径都会被自动改写从而确保在开发和构建中都指向正确的文件路径。CSS 代码分割：构建时每一个被分割的 JS 文件都会自动生成一个对应的 CSS 文件，并且两个文件会被自动并行按需加载。
+ 全新插件机制和 API
    vite 2.0 提供了通过插件的形式来支持对vue 技术栈的项目进行构建；用来支持 vue2 的插件`vite-plugin-vue2`。
## 出现的契机

**缓慢的服务器启动：**
当冷启动开发服务器时，基于打包器的方式启动必须先去急切地抓取和构建你的整个应用，然后再提供服务。

**缓慢的更新：**
当基于打包器启动时，编辑文件后将重新构建文件本身。显然我们不应该重新构建整个包，因为这样更新速度会随着应用体积增长而直线下降

![d](https://fastly.jsdelivr.net/gh/willwang1997/picMap@main/20210518172055.png)
***
## 创建vite for vue 的项目
前提：Node.js 的版本 必须大于等于12.0.0；
1. 创建
    ```
    yarn create @vitejs/app [项目名称]
    ```
2. 选择，我这里选择的是vue 和JavaScript,vue 默认版本是 3.0。:ambulance:
    ![](https://fastly.jsdelivr.net/gh/willwang1997/picMap@main/20210518175528.png)
    ***
    ![](https://fastly.jsdelivr.net/gh/willwang1997/picMap@main/20210518175652.png)
3. 安装依赖，开启服务。
    ```
    yarn dev
    ```
## vite2 跑 vue2 
由于直接通过vite创建的项目是vue3.0，所以对于前vue2.0的项目想通过vite跑起来，需要进行迁移，好在vite2.0都提供了差价，接下来就是对某一个小的vue-cl3.0+vue2.0进行项目迁移的记录。
1. 安装环境与插件支持
    ```
    npm i -D vite  
    npm i -D vite-plugin-vue2
    ```
2. 在原来的项目文件目录下面，与vue.config.js同级的目录创建`vite.config.ts`（如果你是ts的话）或者`vite.config.js`文件。
    ```javaScript
    import { createVuePlugin } from "vite-plugin-vue2";//引入插件
    import { defineConfig } from "vite";
    //import vue from '@vitejs/plugin-vue' 注释vue3
    import path from "path";//引入path路径
    export default defineConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        base: "/",
        plugins: [
            // vue()
            createVuePlugin()
        ],
        server: {
            port: 8080 //跑起来的服务端口
        }
    });
    ```
3. 在项目根目录与*vue.config.js同级*创建入口文件index.html,引入 script 标签，使用浏览器原生的 ESM 来加载main.js。
    ```html
    <body>
        <div id="app"></div>
        <!-- 引入js的方式为type=module -->
        <script type="module" src="/src/main.js"></script> 
    </body>
    ```
4. package.json创建单独的命令"dev": "vite"
    ```JSON
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "test:unit": "vue-cli-service test:unit",
        "lint": "vue-cli-service lint",
        // 添加 运行命令
        "dev": "vite",
        // 自选添加vite的打包命令
        "v-build": "vite build"
    },
    ```
## 总结
确实相比于使用webpack进行开发的项目，冷启动，热更新的话比vite慢，用起来的直观感受就是快。但是在vue2的项目中，还有很多需要注意的地方，比如src配置，以及寻找插件等问题。我目前没有把公司目前的项目进行vite跑，尝新是没问题，但还是求稳定吧。:penguin:
后续会假如真的跑实际业务公司项目了，会继续记录一下。

## 相关链接
[vite官网](https://cn.vitejs.dev/)

[vite2.0](https://juejin.cn/post/6930792459567890446)

[vite2搞vue2.0](https://www.yuque.com/xinbao37/roadmap/vite2-vue2)

[vue-cli 迁移 vite2 实践小结](https://juejin.cn/post/6934316962952544269#heading-7)
