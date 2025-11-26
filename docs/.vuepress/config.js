import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { commentPlugin } from '@vuepress/plugin-comment'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '魔兽世界灯塔',
  description: '点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。',
  //head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '魔兽世界灯塔',
      description: '点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'World of Warcraft Lighthouse',
      description: 'Lighting the beacon in the mist, guiding your journey through Azeroth.-powered Static Site Generator',
    },
  },
  theme: defaultTheme({
    logo: './images/wow.svg',
    // 修正语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
        navbar: [
          { 
            text: '首页', 
            link: '/' 
          },
          { 
            text: '入门指南', 
            link: '/get-started/'  // 确保以斜杠结尾
          },
          {
            text: '节日活动',
            children: [
              { 
                text: '感恩节', 
                link: '/tasks/节日活动/感恩节' 
              }
            ]
          },
          {
            text: '职业任务',
            children: [
              { 
                text: '法师', 
                link: '/tasks/职业任务/法师/' 
              },
              // 确保链接以 / 开头
              { 
                text: '战士', 
                link: '/tasks/职业任务/战士/' 
              }
            ]
          },
          { 
            text: '副本攻略', 
            link: '/raids/' 
          },
          { 
            text: '插件分享', 
            link: '/plugins/' 
          }
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: [
          { 
            text: 'Home', 
            link: '/' 
          },
          { 
            text: 'Getting Started', 
            link: '/get-started/'  // 确保以斜杠结尾
          },
          {
            text: 'Class Quests',
            children: [
              { 
                text: 'Mage', 
                link: '/tasks/职业任务/法师/' 
              },
              // 确保链接以 / 开头
              { 
                text: 'Warrior', 
                link: '/tasks/职业任务/战士/' 
              }
            ]
          },
          { 
            text: 'Raid Guides', 
            link: '/en/raids/' 
          },
          { 
            text: 'Addons', 
            link: '/en/plugins/' 
          }
        ],
      },
    },
    
  }),
  plugins: [
    // 注册组件插件
    registerComponentsPlugin({
      // 组件自动注册的目录
      componentsDir: path.resolve(__dirname, './components')
    }),
    commentPlugin({
      provider: 'Artalk', // Artalk | Giscus | Waline | Twikoo
      // 服务商配置
      server: 'https://artalk.bearai.com.cn', // 您的 Artalk 服务地址
      site: '魔兽世界灯塔',
      darkMode: 'auto',
      comment: true,
      locale: {
        '/': 'zh-CN',    // 中文
        '/en/': 'en',    // 英文
      }
    }),
  ],
  bundler: viteBundler(),
})