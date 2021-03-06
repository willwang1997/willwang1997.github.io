---
title: 关于本站 + hexo + travel cl
date: 2020-07-02 16:08:21
reward: true
toc: true
tags:
    - hexo
---
### 2020-6-1：搭建与保存源项目文件
:rocket:偶然间在csdn，或者掘金上面看到别人的空间，链接到他到博客，瞬间鸡血上头，想自己弄个属于自己的个人网站，所以就开搞了。作为喜欢白嫖的人，网上找了一个免购买服务器到方法，就是hexo+ githubPage,的形式搭建静态资源，so。。。
+ 安装环境，比如node，hexo，创建仓库，开启page功能。
    **接入评论系统的时候要注册配置[leanCloud](https://www.leancloud.cn/)**
    友情链接:[5分钟搞定个人博客-hexo](https://www.jianshu.com/p/390f202c5b0e)。
    友情链接:[接入评论系统 - valine](https://valine.js.org/quickstart.html)。
<!-- more -->
+ 博客仓库保存的是编译构建后的代码，而实际操作文件仍在本地。假如换台电脑，需要拷贝，所以接下来是把项目操作文件也同步到仓库去，这样做到好处是多台电脑可以提交。但是会让别人知道你到源文件。主要思路是：在你的xxxio仓库重新创建一个hexo分支，上传你都源文件，默认地址选择为hexo分支。
    友情链接：[Hexo项目同步github分支](https://www.jianshu.com/p/a8a3a67ffb34);

### 2020-07-02：hexo博客的自动化构建
:rocket:在生成自己的博客之后，到发布，需要执行到命令默认是`hexo clean`,`hexo deploy`。通过网上搜寻，找到了一种只要添加提交到远程仓库，自动为你构建发布到方法，那就是**travel cl**。目前github 到pages服务默认选择了https，所以在浏览器不会出现不安全警告。
友情链接：[运用 travis -cl 域名添加https 进行持久化 构建](https://molunerfinn.com/hexo-travisci-https/)。
+ travel cl 构建文档时修改.env  少了空格，所以一直没有自动构建成功。{% asset_img 微信截图_20200812115232.png 图片%} 

### 2020-08-23：主题yilia的优化修改
:rocket:接下里到日子就是对博客对样式以及功能添加，因为主题用对是yilia，然后自己又偏偏喜欢vuepress类型的主题，所以最后还是没有选择vue对博客搭建。以下是对hexo博客的优化记录，感谢网友提供这么多资料，哈哈哈哈。:laughing:
友情链接：[Hexo-Yilia 进阶笔记](https://tding.top/archives/9a232bbe.html)
友情链接：[hexo使用Github emoji](https://hasaik.com/posts/9b280ea3.html)

### 2020-09-30：hexo博客文档的分类和归档入口
:rocket:在yilia主题中添加分类和归档的入口。
{% asset_img 截屏2021-05-11上午11.13.22.png 图片%} 
***
{% asset_img 截屏2021-05-11上午11.17.20.png 图片%} 
参考配置链接：[分类和归档](https://github.com/litten/hexo-theme-yilia/issues/835)。

### 利用码云pages搭建同步github的博客
:rocket:国内访问github，或者GitHub的博客是非常慢的，所以可以选择挂在自己买的服务器上，但是自己既然买了服务器，自己手写一个不跟好吗？目前国内可以选择放在coding和gitee上面，选择coding的方式有时会出现问题，同时我看到它的每一个仓库大小是2g，所以还是放到了gitee上面我比较安全。
>码云 Pages 是一个免费的静态网页托管服务，可以用来托管博客、官网等静态网页，关键是还支持 Jekyll、Hugo、Hexo 等优秀的开源博客系统来编译静态资源。

其中：码云 Pages 的访问地址不带二级目录，需要把仓库名称和路径改成你的码云账号，码云账号是需要在`个人设置`->`基本设置`->`个人资料`->`个人空间地址`，里面查看。
官方文档：[不带二级目录](https://gitee.com/help/articles/4136#article-header0)
友情链接: [白嫖码云Pages](https://juejin.cn/post/6868451280348676110)

### 2021-5-15：用PicGo来快速上传图片获得网络地址
:rocket:了解到如果上传图片到hexo项目文件，那么会造成此仓库到文件大小非常大，假如clone 下来本地要下载很久，当然挂了梯子还好，下载速度还快，hexo到语法引入远程地址（网络地址）的图片相对速度比较快。
所以综上所述，网上找到了一些解决办法，目前我用到是其中一种。利用github搭建图床，博客系统直接引用图床到图片地址即可。
强烈推荐`PicGo`:[听说你也想用PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/)
![s](https://cdn.jsdelivr.net/gh/willwang1997/picMap@main/20210518153514.png)
***
**遇到的问题**
按照配置信息，github的图片上传后是不能访问（当然可以找其他的图床，或者购买服务器）,Windows本地的picgo图片也挂了，mac目前本地看picgo的图片好像没出事，但是上传后的图片网络地址域名是被墙的，所以解决方法是：
1. 解决本地自己能看到图片，Windows电脑在`C:\Windows\System32\drivers\etc`的host文件添加
    ```
    # GitHub Start 
    192.30.253.112    Build software better, together 
    192.30.253.119    gist.github.com
    151.101.184.133    assets-cdn.github.com
    151.101.184.133    raw.githubusercontent.com
    151.101.184.133    gist.githubusercontent.com
    151.101.184.133    cloud.githubusercontent.com
    151.101.184.133    camo.githubusercontent.com
    151.101.184.133    avatars0.githubusercontent.com
    151.101.184.133    avatars1.githubusercontent.com
    151.101.184.133    avatars2.githubusercontent.com
    151.101.184.133    avatars3.githubusercontent.com
    151.101.184.133    avatars4.githubusercontent.com
    151.101.184.133    avatars5.githubusercontent.com
    151.101.184.133    avatars6.githubusercontent.com
    151.101.184.133    avatars7.githubusercontent.com
    151.101.184.133    avatars8.githubusercontent.com
    # GitHub End
    ```
2. 在没挂梯子的时候能够正常查看图片，运用`jsDelivrCND`（[jsDelivrCND官网](https://www.jsdelivr.com/?docs=gh)）的方式，地址指向jsDelivr的路径就好了，
    例如：
    `raw.githubusercontent.com/willwang1997/picMap/main/20210518153514.png`
    改为: 其中 main 为分支名字，
    `cdn.jsdelivr.net/gh/willwang1997/picMap@main/20210518153514.png`

友情链接：[解决github图床问题](https://blog.csdn.net/wzp12321/article/details/113427037)