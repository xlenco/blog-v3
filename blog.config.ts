import type { NitroConfig } from 'nitropack'
import type { BundledLanguage, BundledTheme } from 'shiki'
import type { FeedEntry } from '~/types/feed'
import redirectList from './redirects.json'

export { zhCN as dateLocale } from 'date-fns/locale/zh-CN'

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
const blogConfig = {
    title: '希乐博客',
    subtitle: '总有人间一两风，吹我十万八千梦',
    // 长 description 利好于 SEO
    description: 'Xlenco的个人博客，分享技术与生活。“生命不息，折腾不止”。Xlenco是一名开源爱好者，本博客采用了纸鹿的开源博客，这个博客记录了他在生活和技术学习中的点滴经历，充满启发与思考。网站界面简洁美观，内容丰富实用，涵盖了编程、生活、学习等多个领域，为读者提供了卓越的阅读体验。',
    author: {
        name: 'Xlenco',
        avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1043865083&spec=640&img_type=webp',
        email: 'xlenco@hotmail.com',
        homepage: 'https://xlenco.top/',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: '署名-非商业性使用-相同方式共享 4.0 国际',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
    },
    favicon: 'https://weavatar.com/avatar/67254b346498965226e5c91ebff66a69570b97f224d2d061e504b4eade1f00fa?s=160',
    language: 'zh-Hans',
    qqGroup: '1043865083',
    timeEstablished: '2022-07-19',
    timezone: 'Asia/Shanghai',
    url: 'https://blog.xlenco.top/',

    feed: {
        limit: 50,
    },

    // 在 URL 中隐藏的路径前缀
    hideContentPrefixes: ['/posts'],

    imageDomains: [
        // 自动启用本域名的 Nuxt Image
        // 'www.zhilu.cyou',
        // '7.isyangs.cn',
    ],

    // 禁止搜索引擎收录的路径
    robotsNotIndex: ['/preview', '/previews/*'],

    scripts: [
        // 自己部署的 Umami 统计服务
        { 'src': 'https://umami.xlenco.top/script.js', 'data-website-id': '886b4abd-028c-4aee-81f3-ef26b0c68bc2', 'defer': true },

    ],

    // 用于 Shiki、Plain Shiki 引入代码高亮
    // 同时用于显示代码块语言对应的 Iconify Catppuccin 图标
    shiki: {
        bundledLangs: <BundledLanguage[]>['bat', 'log', 'sh', 'powershell'],
        langs: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'sql', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],
        themes: <BundledTheme[]>['catppuccin-latte', 'one-dark-pro'],
        defaultTheme: <BundledTheme>'catppuccin-latte',
        darkTheme: <BundledTheme>'one-dark-pro',
    },

    // 用于 Twikoo 评论系统
    twikoo: {
        js: 'https://cdn.iocdn.cc/npm/twikoo@1.6.39/dist/twikoo.all.min.js',
        envId: 'https://twikoo2.xlenco.top/.netlify/functions/twikoo',
        preload: 'https://twikoo2.xlenco.top/.netlify/functions/twikoo',
    },
}

// 用于生成 OPML 和友链页面配置
export const myFeed = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: '摸鱼处',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: '这是我自己',
}

// 将旧页面永久重定向到新页面
const redirectRouteRules = Object.entries(redirectList)
    .reduce<NitroConfig['routeRules']>((acc, [from, to]) => {
        acc![from] = { redirect: { to, statusCode: 301 } }
        return acc
    }, {})

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    ...redirectRouteRules,
    '/api/stats': { prerender: true, headers: { 'Content-Type': 'application/json' } },
    '/atom.xml': { prerender: true, headers: { 'Content-Type': 'application/xml' } },
}

export default blogConfig
