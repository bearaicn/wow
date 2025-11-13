import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '魔兽世界灯塔',
  description: '点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。',
  //head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: './images/wow.svg',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
