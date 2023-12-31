const moment = require('moment');
moment.locale("zh-cn");

module.exports = [
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp) => {
                return moment(timestamp).format("LLLL")
            }
        }
    ],
    ['@vuepress/back-to-top'],
    [
        '@vuepress/medium-zoom',
        {
            selector: 'img.custom',
        }
    ]
]