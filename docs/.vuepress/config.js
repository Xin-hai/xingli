const headConfig = require('./config/headConfig');
const pluginConfig = require('./config/pluginConfig');
const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')



module.exports = {
    base: '/xingli/',
    title: 'Xin UI',
    description: '一个好用的基于Vue的UI框架',
    head: headConfig,
    plugins: pluginConfig,
    themeConfig: {
        logo: '/img/logo.png',
        lastUpdated: '上次更新',
        nav: navConfig,
        sidebar: sidebarConfig
    },
    markdown: {
        lineNumbers: true
    }
}