const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    base: '/xingli/',
    title: 'Xin UI',
    description: '一个好用的基于Vue的UI框架',
    head: [
        ['meta', { name: 'author', content: 'Xin-hai,新海' }],
        ['meta', { name: 'keywords', content: 'UI框架，Vue，Vuepress，xin' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format("LLLL")
                }
            }
        ],
        ['@vuepress/back-to-top']
    ],
    themeConfig: {
        logo: '/img/logo.png',
        lastUpdated: '更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            {
                text: 'Github',
                ariaLabel: 'Github Menu',
                items: [
                    { text: 'Github', link: 'https://github.com/Xin-hai/xingli' },
                    { text: '知乎', link:'https://www.zhihu.com/people/ai-ni-xiao-hai'}
                ]
            }
        ],
        sidebar: [
            {
                title: '入门',
                sidebarDepth: 2,
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                sidebarDepth: 2,
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ]
    },
    markdown: {
        lineNumbers: true
    }
}