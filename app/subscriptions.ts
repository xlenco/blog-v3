import type { FeedGroup } from '~/types/feed'
import { getGhAvatar } from './utils/img'

export default <FeedGroup[]>[{
    name: '漫游',
    desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
    entries: [{
        author: '风记星辰',
        desc: '热爱你来过的每度温暖',
        feed: 'https://www.thyuu.com/feed',
        link: 'https://thyuu.com/',
        icon: 'https://std.thyuu.com/logo.svg',
        avatar: 'https://std.thyuu.com/logo.svg',
        archs: ['WordPress', '服务器'],
        date: '2024-02-01',
    }, {
        author: '静かな森',
        desc: '致虚极，守静笃。',
        link: 'https://innei.in/',
        feed: 'https://innei.in/feed',
        icon: 'https://innei.in/innei.svg',
        avatar: getGhAvatar('Innei'),
        archs: ['Mix Space', 'Cloudflare'],
        date: '2024-02-13',
    }, {
        author: 'Randwind',
        title: 'Randwind\'s Blog',
        desc: '你可以期待太阳从东方升起，而风却随心所欲地从四面八方吹来。',
        link: 'https://www.randwind.com/',
        feed: 'https://randwind.com/feed.xml',
        icon: 'https://wsrv.nl/?url=randwind.com/favicon.ico',
        avatar: 'https://wsrv.nl/?url=randwind.com/favicon.ico',
        archs: ['Hugo', 'Cloudflare'],
        date: '2024-02-03',
        comment: '一个喜欢折腾的 Web 前端开发者。2024-05-28 关闭友链功能。',
    }, {
        author: 'Myth',
        desc: '荒唐无聊正经有趣的大学生 | 业余 Minecraft 腐竹 | PTer',
        title: 'Myth\'s Blog | Myth 的小站',
        link: 'https://myth.cx/',
        feed: 'https://myth.cx/index.xml',
        icon: 'https://myth.cx/favicon.ico',
        avatar: 'https://myth.cx/img/avatar_hu4881e27882f65e048194c2e8319e9874_294915_300x0_resize_box_3.png',
        archs: ['Hugo', 'Cloudflare'],
        date: '2024-04-11',
    }, {
        author: 'Dejavu',
        title: 'Dejavu\'s Blog',
        link: 'https://blog.dejavu.moe/',
        feed: 'https://blog.dejavu.moe/index.xml',
        icon: 'https://blog.dejavu.moe/favicon.ico',
        avatar: 'https://blog.dejavu.moe/img/avatar_hu153f535f3685d84c2248f9e3bcb0c932_112544_288x288_fill_q75_h2_box_center_2.webp',
        archs: ['Hugo', 'Cloudflare'],
        date: '2024-04-29',
    }, {
        author: '甜鱼',
        sitenick: 'Ayu',
        title: '甜鱼/Ayu',
        desc: '三脚猫多面手，努力学习世界的一切。',
        link: 'https://ayu.land/',
        feed: 'https://ayu.land/rss.zh.xml',
        icon: 'https://ayu.land/bin/favicon.png',
        avatar: 'https://ayu.land/favicon.png',
        archs: ['HTML', 'Deno Deploy'],
        date: '2024-10-26',
    }, {
        author: 'Anthony Fu',
        desc: 'Hey, I am Anthony Fu, a fanatical open sourceror.',
        link: 'https://antfu.me/',
        feed: 'https://antfu.me/feed.xml',
        icon: 'https://antfu.me/favicon.svg',
        avatar: getGhAvatar('antfu'),
        archs: ['Vue', 'Netlify'],
        date: '2024-10-26',
    }, {
        author: 'XAOXUU',
        desc: '风暴前夕',
        link: 'https://xaoxuu.com/',
        feed: 'https://xaoxuu.com/atom.xml',
        icon: 'https://xaoxuu.com/assets/xaoxuu/favicon/favicon-32x32.png',
        avatar: getGhAvatar('xaoxuu'),
        archs: ['Hexo', '服务器'],
        date: '2024-10-26',
    }, {
        author: '無名',
        sitenick: '小栈',
        title: '無名小栈',
        desc: '分享技术与科技生活',
        link: 'https://blog.imsyy.top/',
        feed: 'https://blog.imsyy.top/rss.xml',
        icon: 'https://unavatar.webp.se/blog.imsyy.top',
        avatar: getGhAvatar('imsyy'),
        archs: ['VitePress', 'Cloudflare'],
        date: '2024-10-26',
    }, {
        author: '汐笺',
        sitenick: '最小可读',
        desc: '基本无害，可能有用',
        link: 'https://mvread.blog/',
        feed: 'https://mvread.blog/feed',
        icon: 'https://wsrv.nl/?url=mmbiz.qpic.cn/mmbiz_png/ObdOUIBwLwlt7jrOzKib6gUM83iaY6d6qLF4fH7AtAyL8mnic0jPicnFLdjXnduL5Pkj8Viah8RJAZzPwOWlj8995Qw/0',
        avatar: 'https://cdnv2.ruguoapp.com/FufBpXB3Ax66mh9vkBEjTujMVLmPv3.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/!300x300r/gravity/Center/crop/!300x300a0a0',
        archs: ['WordPress', '虚拟主机'],
        date: '2024-10-29',
    }],
}]
