### 运用 travis -cl 域名添加https 进行持久化 构建。

来源:  
博客地址 [molunerfinn](https://molunerfinn.com/hexo-travisci-https/)

* （提前检查是否有hexo是否可以执行hexo命令）
  >npm hexo -g 

* 安装依赖
  >cnpm i

* 本地运行
  >hexo server 

* hexo clean,
    
* 此时是发布到了 master 分支，即构建好了线上。
  >hexo deploy,

* git add. commit push 到hexo分支 