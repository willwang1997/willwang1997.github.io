---
title: HowToUseMarkdown
date: 2020-10-10 10:47:43
tags:
    - hexo
    - markdown
---
#### 什么是markdown?
推荐阅读这篇文章,[入门markdown](https://sspai.com/post/36610)。
目前也在自己变学习如何使用md语法进行写文,语法不多,但是用起来还是忘记了所以还是建议变学边敲,我之前是这样总是只看不写，过阵子就忘记了,就掌握基本的一些布局语法。
#### 在hexo中创建一篇markdown文章
<!-- more -->
在你的博客文件目录下输入 

hexo markdown每日语法:
> blog下的_config.yml文件的 post_asset_folder设置为true
> hexo new [layout] test后会自动创建一个同名的文件夹 test
> test.md文件图片引用修改为{%asset_img 1.jpg 描述%}，注意空格
> 其中asset_img为固定写法,1.jpg为图片名,asd为图片描述
