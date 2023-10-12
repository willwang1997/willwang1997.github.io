---
title: HowToUseMarkdown
date: 2020-10-10 10:47:43
tags: 
  - hexo
  - markdown
author: 王维
location: hunan
img: 
---
## 什么是markdown?
推荐阅读这篇文章,[入门markdown](https://sspai.com/post/36610)。
目前也在自己变学习如何使用md语法进行写文,语法不多,但是用起来还是忘记了所以还是建议变学边敲,我之前是这样总是只看不写，过阵子就忘记了,就掌握基本的一些布局语法。
<!-- more -->
## 在hexo博客目录下创建一篇markdown文章
第一步：首先要blog下的`_config.yml`文件的`post_asset_folder`设置为*true*，在执行第二步骤时候会创建同名的文件夹和以 .md结尾的文件，方便分类放置指定图片。
第二步：在你的博客文件目录下输入：
```javascript
hexo new [layout] <title>
//[layout] 为布局，可选项为 `post`、`page`、`draft`，决定文章所在文件路径,需要修改设置_config.yml。
```
会自动创建一个同名的文件夹 ’title‘，和一个 title.md文件。
第三步：开始你的创作。。。。
第四步：手动部署到远程仓库的master分支。
```
hexo clean
hexo deploy
```
第五步：然后再提交到git远程的源文件分支。

## hexo的markdown一些基本语法
1. `#`标题
2. 段落 `回车键`一般回车键就会体现段落的分割。
3. 
    ```
    *斜体文本*
    _斜体文本_
    **粗体文本**
    __粗体文本__
    ***粗斜体文本***
    ___粗斜体文本___
    ```
4. `***` 分割线
5. 无序列表:`*` ,`+`,`-`;有序列表 `1. 文字`,内容过多同时还要首行缩进对齐，不然会重新开始排序。
    ```
    * 文字
    ```
6. 区块，用于引用链接或者一段文本。 `> 文字`,或者`>> 文字`。
7. 代码块:在代码块里面 写代码块文字的时候主要有4空格
    ```JavaScript
        ```javascript
            $(document).ready(function () {
                alert('RUNOOB');
            });
        ```    
    ```
8. 插入图片或者链接：`[]()`来插入链接和 `![]()`来插入图片。
    > 如果是有同名文件夹,图片引用修改为 \{ %asset_img 1.jpg 描述%}，注意空格,其中asset_img为固定写法,1.jpg为图片名,描述：即是简述图片。
9. 高亮：` `` `,在中间添加文字将会显示高亮，以及背景色。
10. 转义字符：
    ```
    \\ 反斜杠
    \` 反引号
    \* 星号
    \_ 下划线
    \{\} 大括号
    \[\] 中括号
    \(\) 小括号
    \# 井号
    \+ 加号
    \- 减号
    \. 英文句号
    \! 感叹号
    ```
11. 表格语法：
```
|  icon  | 表头  | icon   | 表头  |
|  ----  | ----  | ----  | ----  |
| 单元格  | 单元格 |单元格  | 单元格 |
| 单元格  | 单元格 |单元格  | 单元格 |
```
## markdownd 的 emoji 代码语法表格。
|  icon  | icon  | icon   |
|  ----  | ----  | ----  | 
| :tada: `:tada:` | :new: `:new:`| :ambulance: `:ambulance:`|
| :bookmark: `:bookmark:`| :bug: `:bug:`| :globe_with_meridians: `:globe_with_meridians:`|
| :lipstick: `:lipstick:`| :clapper: `:clapper:`| :rotating_light: `:rotating_light:`|
| :wrench: `:wrench:`| :heavy_plus_sign: `:heavy_plus_sign:`| :heavy_minus_sign: `:heavy_minus_sign:`|
| :arrow_up: `:arrow_up:`| :arrow_down: `:arrow_down:`| :zap: `:zap:`|
| :racehorse: `:racehorse:`| :chart_with_upwards_trend:`:chart_with_upwards_trend:`| :rocket: `:rocket:`|
| :white_check_mark:`:white_check_mark:`| :memo: `:memo:`| :book: `:book:`|
| :hammer: `:hammer:`| :art: `:art:`| :fire: `:fire:`|
| :pencil2: `:pencil2:`| :construction: `:construction:`| :wastebasket: `:wastebasket:`|
| :wheelchair: `:wheelchair:`| :construction_worker:`:construction_worker:`| :green_heart: `:green_heart:`|
| :lock: `:lock:`| :whale: `:whale:`| :apple: `:apple:`|
| :penguin: `:penguin:`| :checkered_flag: `:checkered_flag:`| :twisted_rightwards_arrows:`:twisted_rightwards_arrows:`|
pepole
|  icon  | icon  | icon   |
|  ----  | ----  | ----  |
| :smile: `:smile:`| :laughing: `:laughing:`| :blush: `:blush:`|
| :smiley: `:smiley:`| :smirk: `:smirk:`| :heart_eyes: `:heart_eyes:`|
| :kissing_heart: `:kissing_heart:`| :joy: `:joy:`| :weary: `:weary:`|
| :sleeping: `:sleeping:`| :scream: `:scream:`| :blush: `:blush:`|
Nature
|  icon  | icon  | icon   |
|  ----  | ----  | ----  |
| :sun_with_face: `:sun_with_face:`| :full_moon_with_face: `:full_moon_with_face:`| :new_moon_with_face: `:new_moon_with_face:`|
| :sunny: `:sunny:`| :umbrella: `:umbrella:`| :cloud: `:cloud:`|
| :snowflake: `:snowflake:`| :snowman: `:snowman:`| :zap: `:zap:`|