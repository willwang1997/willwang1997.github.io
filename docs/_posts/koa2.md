---
title: koa2 +MongoDB从0到1，实现与数据库交互。
date: 2020-12-15
tags:
    - mongoDB
    - koa2
author: 王维
location: hunan
img: 
---
## Windows MongoDB环境配置
MongoDB的搭建，第一次在公司电脑下载MongoDB的时候出了一个问题解决了很久。
<!-- more -->
下载安装的是 [社区版本4.0+ （点击下载）](https://www.mongodb.com/try/download/community)，然后安装过程中总是报：

![sad](https://fastly.jsdelivr.net/gh/willwang1997/picMap@main/20180930095421630.png)

```
。。。。failed to start Verify that you have sufficient privileges to start system services
```
最后的找到的原因是，电脑（win10）的系统远程服务没有配置，what the fuck，我一直以为是安装环境没弄好，或者windows没有激活的原因。
1. 首先完全卸载MongoDB,可以根据以下两个方式去检查是否完全卸载干净
    1.1.如果你安装过MongoDB，再次安装时出现这个错误（请先确保已经完全卸载了MongoDB），这可能是MongoDB服务的注册表没有删除干净。在“运行”里面输入“regedit”打开注册表编辑器，打开“HKEY_LOCAL_MACHINE\SYSTEM\”，找到CurrentControlSet，会有001，002的后缀多个，都打开找到Services打开，在里面找MongoDB，如果有就删除。重新安装就不会有这种错误。
    1.2.如果报的错误是Service ‘MongoDB Server’(MongoDB) failed to install，就是MongoDB服务没有删除，打开计算机—管理，在服务里可以看到MongoDB Server在，就在控制台输入sc delete MongoDB关闭，然后删除掉就可以（需要管理员权限），然后再重启电脑。
2. 接下来就是需要重新添加电脑的远程服务设置，
    > 此电脑——管理——本地用户和组——组——双击Administrator——添加——高级——立即查找——添加NETWORK SERVICE——确认——应用
    参考链接：[错误1053的解决办法](https://jingyan.baidu.com/article/90bc8fc8207edeb753640ca3.html)。
3. 然后再重新安装 MongoDB，就不会报最开始的错误了。

参考链接：
[WindowsMongoDB下载、安装、配置、使用](https://blog.csdn.net/muguli2008/article/details/80591256)。

## macOs MongoDB的环境配置
1. 从官网下载的是一个压缩包，解压后放入/usr/local，打开Finder后按 shift + command +G 输入 /usr/local 后回车便能看到这个隐藏的目录了。
2. 配置环境变量，打开终端，输入“open -e .bash_profile”，在打开的文件中加入
    ```
    export PATH=${PATH}:/usr/local/MongoDB/bin
    ```
3. Command+S保存配置，在终端输入"source .bash_profile"使配置生效。输入"mongod -version"，回车后如果看到下面的版本号则说明MongoDB已经成功安装到了Mac上。
4. 在 “/usr/local/mongoDB“目录先创建log和data文件夹。
5. 在终端中，先进入/usr/local/mongoDB ，输入"mongod --dbpath data --logpath log/mongod.log --logappend"，启动mongodb服务(当前终端不要关闭)；可以选择在mac根目录(即Macintosh HD)中创建/data/db，需要重启电脑时候配置。
    >如果改变data目录位置，则需要在启动服务时 指定dbpath的位置。
    >--dbpath 指定为刚才创建好的data目录
    >--logpath 指定log存放位置
    >--logappend mongo在后台运行
6. 新的终端中输入"mongo" 连接数据库,如果终端出现了以下信息，则说明链接成功。（uuid我这个是设置了超级管理员，默认是所有权限）。
```
MongoDB shell version v4.4.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("********************************") }
MongoDB server version: 4.4.6
---
    Enable MongoDB's free cloud-based monitoring service, which will then receive and display
    metrics about your deployment (disk utilization, CPU, operation statistics, etc).

    The monitoring data will be available on a MongoDB website with a unique URL accessible to you
    and anyone you share the URL with. MongoDB may use this information to make product
    improvements and to suggest MongoDB products and deployment options to you.

    To enable free monitoring, run the following command: db.enableFreeMonitoring()
    To permanently disable this reminder, run the following command: db.disableFreeMonitoring()

```

参考友情链接：
[macOs安装的步骤知乎](https://zhuanlan.zhihu.com/p/112263843)；
[macOs安装的步骤简书](https://www.jianshu.com/p/a594e6482e5c)；

## koa创建项目
因为是基于node，先创建一个文件夹，进入文件夹后打开终端，输入`node init`开始初始化一个node项目（此时会创建一个`package.json`文件，然后创建一个app.js文件。再安装koa的项目依赖：
```
yarn install koa 或者npm install koa
```
然后在项目目录文件终端下面运行
```
node app.js 
```
## 运用koa生成器创建项目
生成器：一个方便快速使用的脚手架，首先安装环境依赖：`npm install koa-generator -g` ，然后再使用下面的命令：
```
koa koa_demo 
//创建成功后，进入koa_demo，运行
npm run start  
```
## koa路由
npm install --save koa-router
## koa post 请求的数据
对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中。
npm install --save koa-bodyparser
```javascript
var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(bodyParser());
 
app.use(async ctx => { 
  ctx.body = ctx.request.body;
});
```
## koa静态资源
npm install --save koa-static 主要是用于访问静态资源

## koa使用session
npm install koa-session --save
引入：
```
const session = require('koa-session');
```
设置官方文档提供的中间件：
```javascript
app.keys = ['some secret hurr'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
//使用
    设置值 ctx.session.username = "张三";
     获取值 ctx.session.username
```
## koa 跨域
koa2-cors安装`yarn add koa2-cors -S`

在app.js内添加如下代码
```javascript
const cors = require('koa2-cors')
.......
// 其他代码
app.use(cors( ))
```
***

## 搭建连接好MongoDB的koa2项目
在最开始已经知道怎么初始化一个项目的情况下，我们接下来进行的是，能在网页中显示找到你保存到数据库的数据。

项目文件结构（文件目录结构,命名不严谨，仅供展示）：
```
├── koa-demo
│   ├── controller
│   │   └── home.js
│   ├── dbHelper
│   │   └── user.js
│   ├── router.js
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── start.js
```
1. 确认安装所有项目依赖
    ```JavaScript
    // 路由
    npm install koa-router koa-bodyparser --save
    // 解决跨域问题
    npm install koa2-cors --save

    //以下三个是选择安装的，建议全部安装，都是好东西。
    //热重启
    npm install nodemon --save
    // 支持import模块的引入
    npm install babel-plugin-transform-es2015-modules-commonjs babel-register --save
    // mongodb
    npm install mongoose --save
    ```
2. 热重启配置：在`package.json`文件添加命令
    ```
      "scripts": {
         .....
        "start": "nodemon app.js"
      }
    ```
3. 支持import模块的引入后，在根目录创建`start.js`,写入
    ```JavaScript
    require('babel-register')
    (
        {
            plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
        }
    )
    module.exports = require('./app.js')
    ```
    需要再次修改`package.json`文件的命令
    ```
      "scripts": {
         .....
        "start": "nodemon start.js"
      }
    ```
4. app.js 文件代码添加
    ```JavaScript
    .......
    // 引入路由
    import router from './router'
    // router
    app.use(router.routes());
    ......
    ```
5. router.js 文件代码参考
    ```JavaScript
    const router = require('koa-router')()
    const User = require('./controller/home')
    router.get('/', User.query)
    export default router
    ```
5. 控制层文件夹controller，home.js文件代码参考
    ```JavaScript
    const User = require('../dbHelper/user')
    exports.query = async function (ctx, next) {
        let res = await User.queryUsers()
        let message = await sumFunction(1, 2)
        let result = {
            code: 200,
            data: res || {},
            message: message
        }
        ctx.response.body = result
    }
    ```
5. 数据层dbHelper文件夹user.js代码参考
    ``` JavaScript
    // 引入
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    // mongoDB 链接，假如你数据库要密码则要输入密码，参考官方文档
    // https://docs.mongodb.com/manual/reference/connection-string
    const dbUrl = "mongodb://admin:123456@localhost:27017/admin";
    const client = new MongoClient(dbUrl, { useNewUrlParser: true });
    const dbName = 'admin'//数据库名字
    const tableName = 'users'// 表名字
    /**
     * @desc: 查询所有用户
     */
    exports.queryUsers = function () {
        return new Promise(function (resolve, reject) {
            try {
                client.connect(function (err) {
                    assert.equal(null, err);
                    const db = client.db(dbName);
                    const collection = db.collection(tableName);
                    collection.find({}).toArray(function (err, result) {
                        assert.equal(err, null);
                        client.close();
                        resolve(result)
                    });
                })
            } catch (e) {
                reject(e)
            }
         })
        }
    ```
***
总结：数据层的和控制层的js，和MongoDB的代码还很生疏，不会写，需要花时间去学习一下。

