(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{396:function(_,t,v){"use strict";v.r(t);var e=v(1),a=Object(e.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"什么是markdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是markdown"}}),_._v(" 什么是markdown?")]),_._v(" "),t("p",[_._v("推荐阅读这篇文章,"),t("a",{attrs:{href:"https://sspai.com/post/36610",target:"_blank",rel:"noopener noreferrer"}},[_._v("入门markdown"),t("OutboundLink")],1),_._v("。\n目前也在自己变学习如何使用md语法进行写文,语法不多,但是用起来还是忘记了所以还是建议变学边敲,我之前是这样总是只看不写，过阵子就忘记了,就掌握基本的一些布局语法。\n")]),_._v(" "),t("h2",{attrs:{id:"在hexo博客目录下创建一篇markdown文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在hexo博客目录下创建一篇markdown文章"}}),_._v(" 在hexo博客目录下创建一篇markdown文章")]),_._v(" "),t("p",[_._v("第一步：首先要blog下的"),t("code",[_._v("_config.yml")]),_._v("文件的"),t("code",[_._v("post_asset_folder")]),_._v("设置为"),t("em",[_._v("true")]),_._v("，在执行第二步骤时候会创建同名的文件夹和以 .md结尾的文件，方便分类放置指定图片。\n第二步：在你的博客文件目录下输入：")]),_._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[_._v("hexo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("new")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("layout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<")]),_._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("//[layout] 为布局，可选项为 `post`、`page`、`draft`，决定文章所在文件路径,需要修改设置_config.yml。")]),_._v("\n")])])]),t("p",[_._v("会自动创建一个同名的文件夹 ’title‘，和一个 title.md文件。\n第三步：开始你的创作。。。。\n第四步：手动部署到远程仓库的master分支。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("hexo clean\nhexo deploy\n")])])]),t("p",[_._v("第五步：然后再提交到git远程的源文件分支。")]),_._v(" "),t("h2",{attrs:{id:"hexo的markdown一些基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hexo的markdown一些基本语法"}}),_._v(" hexo的markdown一些基本语法")]),_._v(" "),t("ol",[t("li",[t("p",[t("code",[_._v("#")]),_._v("标题")])]),_._v(" "),t("li",[t("p",[_._v("段落 "),t("code",[_._v("回车键")]),_._v("一般回车键就会体现段落的分割。")])]),_._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("*斜体文本*\n_斜体文本_\n**粗体文本**\n__粗体文本__\n***粗斜体文本***\n___粗斜体文本___\n")])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("***")]),_._v(" 分割线")])]),_._v(" "),t("li",[t("p",[_._v("无序列表:"),t("code",[_._v("*")]),_._v(" ,"),t("code",[_._v("+")]),_._v(","),t("code",[_._v("-")]),_._v(";有序列表 "),t("code",[_._v("1. 文字")]),_._v(",内容过多同时还要首行缩进对齐，不然会重新开始排序。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("* 文字\n")])])])]),_._v(" "),t("li",[t("p",[_._v("区块，用于引用链接或者一段文本。 "),t("code",[_._v("> 文字")]),_._v(",或者"),t("code",[_._v(">> 文字")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("代码块:在代码块里面 写代码块文字的时候主要有4空格")]),_._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[_._v("    "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")])]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("javascript\n        $(document).ready(function () {\n            alert('RUNOOB');\n        });\n    ")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")])]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[_._v("`")])]),_._v("    \n")])])])]),_._v(" "),t("li",[t("p",[_._v("插入图片或者链接："),t("code",[_._v("[]()")]),_._v("来插入链接和 "),t("code",[_._v("![]()")]),_._v("来插入图片。")]),_._v(" "),t("blockquote",[t("p",[_._v("如果是有同名文件夹,图片引用修改为 { %asset_img 1.jpg 描述%}，注意空格,其中asset_img为固定写法,1.jpg为图片名,描述：即是简述图片。")])])]),_._v(" "),t("li",[t("p",[_._v("高亮："),t("code",[_._v("``")]),_._v(",在中间添加文字将会显示高亮，以及背景色。")])]),_._v(" "),t("li",[t("p",[_._v("转义字符：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("\\\\ 反斜杠\n\\` 反引号\n\\* 星号\n\\_ 下划线\n\\{\\} 大括号\n\\[\\] 中括号\n\\(\\) 小括号\n\\# 井号\n\\+ 加号\n\\- 减号\n\\. 英文句号\n\\! 感叹号\n")])])])]),_._v(" "),t("li",[t("p",[_._v("表格语法：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("|  icon  | 表头  | icon   | 表头  |\n|  ----  | ----  | ----  | ----  |\n| 单元格  | 单元格 |单元格  | 单元格 |\n| 单元格  | 单元格 |单元格  | 单元格 |\n")])])])]),_._v(" "),t("li",[t("p",[_._v("文中换行："),t("br"),_._v("\n在每行的末尾添加两个空格。")])])]),_._v(" "),t("h2",{attrs:{id:"markdownd-的-emoji-代码语法表格。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdownd-的-emoji-代码语法表格。"}}),_._v(" markdownd 的 emoji 代码语法表格。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("🎉 "),t("code",[_._v(":tada:")])]),_._v(" "),t("td",[_._v("🆕 "),t("code",[_._v(":new:")])]),_._v(" "),t("td",[_._v("🚑 "),t("code",[_._v(":ambulance:")])])]),_._v(" "),t("tr",[t("td",[_._v("🔖 "),t("code",[_._v(":bookmark:")])]),_._v(" "),t("td",[_._v("🐛 "),t("code",[_._v(":bug:")])]),_._v(" "),t("td",[_._v("🌐 "),t("code",[_._v(":globe_with_meridians:")])])]),_._v(" "),t("tr",[t("td",[_._v("💄 "),t("code",[_._v(":lipstick:")])]),_._v(" "),t("td",[_._v("🎬 "),t("code",[_._v(":clapper:")])]),_._v(" "),t("td",[_._v("🚨 "),t("code",[_._v(":rotating_light:")])])]),_._v(" "),t("tr",[t("td",[_._v("🔧 "),t("code",[_._v(":wrench:")])]),_._v(" "),t("td",[_._v("➕ "),t("code",[_._v(":heavy_plus_sign:")])]),_._v(" "),t("td",[_._v("➖ "),t("code",[_._v(":heavy_minus_sign:")])])]),_._v(" "),t("tr",[t("td",[_._v("⬆️ "),t("code",[_._v(":arrow_up:")])]),_._v(" "),t("td",[_._v("⬇️ "),t("code",[_._v(":arrow_down:")])]),_._v(" "),t("td",[_._v("⚡️ "),t("code",[_._v(":zap:")])])]),_._v(" "),t("tr",[t("td",[_._v("🐎 "),t("code",[_._v(":racehorse:")])]),_._v(" "),t("td",[_._v("📈"),t("code",[_._v(":chart_with_upwards_trend:")])]),_._v(" "),t("td",[_._v("🚀 "),t("code",[_._v(":rocket:")])])]),_._v(" "),t("tr",[t("td",[_._v("✅"),t("code",[_._v(":white_check_mark:")])]),_._v(" "),t("td",[_._v("📝 "),t("code",[_._v(":memo:")])]),_._v(" "),t("td",[_._v("📖 "),t("code",[_._v(":book:")])])]),_._v(" "),t("tr",[t("td",[_._v("🔨 "),t("code",[_._v(":hammer:")])]),_._v(" "),t("td",[_._v("🎨 "),t("code",[_._v(":art:")])]),_._v(" "),t("td",[_._v("🔥 "),t("code",[_._v(":fire:")])])]),_._v(" "),t("tr",[t("td",[_._v("✏️ "),t("code",[_._v(":pencil2:")])]),_._v(" "),t("td",[_._v("🚧 "),t("code",[_._v(":construction:")])]),_._v(" "),t("td",[_._v("🗑 "),t("code",[_._v(":wastebasket:")])])]),_._v(" "),t("tr",[t("td",[_._v("♿️ "),t("code",[_._v(":wheelchair:")])]),_._v(" "),t("td",[_._v("👷"),t("code",[_._v(":construction_worker:")])]),_._v(" "),t("td",[_._v("💚 "),t("code",[_._v(":green_heart:")])])]),_._v(" "),t("tr",[t("td",[_._v("🔒 "),t("code",[_._v(":lock:")])]),_._v(" "),t("td",[_._v("🐳 "),t("code",[_._v(":whale:")])]),_._v(" "),t("td",[_._v("🍎 "),t("code",[_._v(":apple:")])])]),_._v(" "),t("tr",[t("td",[_._v("🐧 "),t("code",[_._v(":penguin:")])]),_._v(" "),t("td",[_._v("🏁 "),t("code",[_._v(":checkered_flag:")])]),_._v(" "),t("td",[_._v("🔀"),t("code",[_._v(":twisted_rightwards_arrows:")])])])])]),_._v(" "),t("p",[_._v("pepole")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("😄 "),t("code",[_._v(":smile:")])]),_._v(" "),t("td",[_._v("😆 "),t("code",[_._v(":laughing:")])]),_._v(" "),t("td",[_._v("😊 "),t("code",[_._v(":blush:")])])]),_._v(" "),t("tr",[t("td",[_._v("😃 "),t("code",[_._v(":smiley:")])]),_._v(" "),t("td",[_._v("😏 "),t("code",[_._v(":smirk:")])]),_._v(" "),t("td",[_._v("😍 "),t("code",[_._v(":heart_eyes:")])])]),_._v(" "),t("tr",[t("td",[_._v("😘 "),t("code",[_._v(":kissing_heart:")])]),_._v(" "),t("td",[_._v("😂 "),t("code",[_._v(":joy:")])]),_._v(" "),t("td",[_._v("😩 "),t("code",[_._v(":weary:")])])]),_._v(" "),t("tr",[t("td",[_._v("😴 "),t("code",[_._v(":sleeping:")])]),_._v(" "),t("td",[_._v("😱 "),t("code",[_._v(":scream:")])]),_._v(" "),t("td",[_._v("😊 "),t("code",[_._v(":blush:")])])])])]),_._v(" "),t("p",[_._v("Nature")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")]),_._v(" "),t("th",[_._v("icon")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("🌞 "),t("code",[_._v(":sun_with_face:")])]),_._v(" "),t("td",[_._v("🌝 "),t("code",[_._v(":full_moon_with_face:")])]),_._v(" "),t("td",[_._v("🌚 "),t("code",[_._v(":new_moon_with_face:")])])]),_._v(" "),t("tr",[t("td",[_._v("☀️ "),t("code",[_._v(":sunny:")])]),_._v(" "),t("td",[_._v("☔️ "),t("code",[_._v(":umbrella:")])]),_._v(" "),t("td",[_._v("☁️ "),t("code",[_._v(":cloud:")])])]),_._v(" "),t("tr",[t("td",[_._v("❄️ "),t("code",[_._v(":snowflake:")])]),_._v(" "),t("td",[_._v("⛄️ "),t("code",[_._v(":snowman:")])]),_._v(" "),t("td",[_._v("⚡️ "),t("code",[_._v(":zap:")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);