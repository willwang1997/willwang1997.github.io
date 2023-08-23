module.exports = {
    title: "willwang's blog",
    description: 'Just playing',
    // theme: '@vuepress/theme-blog',
    plugins:
        [
            ['@vuepress/blog', {
                directories: [
                    {
                        // 当前分类的唯一 ID
                        id: 'post',
                        // 目标文件夹
                        dirname: '_posts',
                        path: '/',
                    },
                ],
                frontmatters: [
                    {
                        // 当前分类的唯一ID
                        id: 'tag',
                        // 决定将 frontmatter 键值归到该类别下
                        keys: ['tags'],
                        // `entry page` (或者 `list page`) 的路径
                        path: '/category/',
                        // `entry page` 的布局
                        layout: 'Category',
                    },
                ],
                globalPagination: {
                    lengthPerPage: 5,
                    prevText: '上一页',
                    nextText: '下一页'
                },
                feed: {
                    canonical_base: 'https://willwang1997.github.io/',
                },
                sitemap: {
                    hostname: 'https://willwang1997.github.io/',
                },
            }],
            // [
            //     'vuepress-plugin-comment',
            //     {
            //         choosen: 'valine',
            //         // options选项中的所有参数，会传给Valine的配置
            //         options: {
            //             el: '#valine-vuepress-comment',
            //             appId: 'a7wKbSbc5RiKOd1zn4tvonXH-gzGzoHsz',
            //             appKey: 'tF2j46TCl3WBqg0HB963zchP',
            //             path: '<%- frontmatter.commentid || frontmatter.permalink %>',
            //             // 评论框占位内容
            //             placeholder: "评论支持Markdown语法",
            //             // 评论者头像
            //             avatar: "monsterid",
            //         }
            //     }
            // ],
            '@vuepress/back-to-top',
            '@vuepress/nprogress',
        ],
    themeConfig: {
        logo: '/avart.jpeg',
        // 是否显示所有页面的标题链接
        displayAllHeaders: true,
        // 页面滚动效果
        smoothScroll: true,
        lastUpdated: '上次更新时间', // string | boolean
        nav: [
            { text: 'Github', link: 'https://github.com/willwang1997' },
            { text: '掘金', link: 'https://juejin.cn/user/3456520288480792' },
            { text: 'RSS', link: 'https://willwang1997.github.io/rss.xml' },
            { text: '邮箱', link: 'mailto:942345396@qq.com' }
        ],
        sidebar: [
            {
                title: '文章',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '分类',   // 必要的
                path: '/category/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '说说',   // 必要的
                path: '/talk/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '留言板',   // 必要的
                path: '/message/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '摄影相册',   // 必要的
                path: 'https://willwoung0328.lofter.com/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '友情链接',   // 必要的
                path: '/fLink/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '关于',   // 必要的
                path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            }
        ],
    },
    markdown: {
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: ' '
        }
    },
    define: {
        // THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        //     ? themeConfig.paginationComponent
        //     : 'Pagination',
    },
}