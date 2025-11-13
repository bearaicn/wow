import comp from "D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/wow.svg\",\"tagline\":\"Lighting the beacon in the mist, guiding your journey through Azeroth\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"View Guides\",\"link\":\"/guides/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Comprehensive Guides\",\"details\":\"Covering dungeon strategies, class guides, quest walkthroughs, and all aspects of gameplay to help you overcome any challenge.\"},{\"title\":\"Real-time Updates\",\"details\":\"Keeping up with game patches and expansions to ensure all guides are based on the latest game mechanics and data.\"},{\"title\":\"Community Driven\",\"details\":\"Maintained by veteran players, pooling collective wisdom to share the most practical gaming experiences.\"},{\"title\":\"Beginner Friendly\",\"details\":\"From basic operations to advanced techniques, providing suitable learning paths for players of all levels.\"},{\"title\":\"Multi-class Coverage\",\"details\":\"Detailed guides for all classes to help you find the gameplay style that suits you best.\"},{\"title\":\"Cross-version Support\",\"details\":\"Supporting both Classic and Retail versions to meet the needs of different players.\"}],\"footer\":\"For Azeroth! | World of Warcraft Lighthouse © 2024\"},\"headers\":[{\"level\":2,\"title\":\"Welcome to World of Warcraft Lighthouse\",\"slug\":\"welcome-to-world-of-warcraft-lighthouse\",\"link\":\"#welcome-to-world-of-warcraft-lighthouse\",\"children\":[]}],\"git\":{\"updatedTime\":1763025372000,\"contributors\":[{\"name\":\"Carl Ding(丁竹)\",\"username\":\"\",\"email\":\"yyguangzheng@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"c924d3d02b3f12354c08f68fe0c33c989129ff02\",\"time\":1763025372000,\"email\":\"yyguangzheng@163.com\",\"author\":\"Carl Ding(丁竹)\",\"message\":\"添加中英文支持\"}]},\"filePathRelative\":\"en/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
