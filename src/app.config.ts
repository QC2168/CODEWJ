export default {
  pages: [
    'pages/index/index',
    'pages/profile/profile',
  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/tabbar/index.png',
      'selectedIconPath': 'assets/tabbar/index_selected.png',
      pagePath: 'pages/index/index',
      text: '้ฆ้กต'
    }, {
      'iconPath': 'assets/tabbar/profile.png',
      'selectedIconPath': 'assets/tabbar/profile_selected.png',
      pagePath: 'pages/profile/profile',
      text: 'ๆ็'
    }],
    'color': '#000',
    'selectedColor': '#6900FF',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
