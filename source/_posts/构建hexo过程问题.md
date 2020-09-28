---
title: hexo
date: 2020-07-02 16:08:21
reward: true
tags:
    - hexo
---
更新:2020-07-02
travel cl 构建文档时修改.env  少了空格，所以一直没有自动构建成功。{% asset_img 微信截图_20200812115232.png 图片%} 
<!--more -->
2020-6-1：
在这个source文件夹里面注释掉 欢迎页 hello-world.md里面的默认内容，竟然，无法实现这个主题的Javascript的功能。

hexo markdown每日语法:
> blog下的_config.yml文件的 post_asset_folder设置为true
> hexo n test后会自动创建一个同名的文件夹 test
> test.md文件图片引用修改为{%asset_img 1.jpg asd%}，注意空格
> 其中asset_img为固定写法,1.jpg为图片名,asd为图片描述