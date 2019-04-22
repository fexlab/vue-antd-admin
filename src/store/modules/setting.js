export default {
  namespaced: true,
  state: {
    theme: 'dark',
    layout: 'topmenu',
    contentWidth: 'fluid',
    fixedHeader: false,
    autoHideHeader: false,
    fixedSidebar: false,
    isMobile: false,
    title: 'Vue Antd Admin',
    copyright: '2019',
    footerLinks: [
      { link: 'https://vue.ant.design', name: '帮助' },
      { link: 'https://vue.ant.design', name: '隐私' },
      { link: 'https://vue.ant.design', name: '条款' }
    ]
  },
  mutations: {
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setContentWidth (state, contentWidth) {
      state.contentWidth = contentWidth
    },
    setMobile (state, moible) {
      state.isMobile = moible
    },
    setFixedHeader (state, header) {
      state.fixedHeader = header
    },
    setAutoHideHeader (state, auto) {
      state.autoHideHeader = auto
    },
    setFixedSidebar (state, sidebar) {
      state.fixedSidebar = sidebar
    }
  }
}
