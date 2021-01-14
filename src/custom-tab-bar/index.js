// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#D81E06",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/index_default.png", 
      "selectedIconPath": "/images/index_select.png"
    },
    {
      "pagePath": "/pages/sujun/sujun",
      "text": "诗词文录",
      "iconPath": "/images/record_default.png",
      "selectedIconPath": "/images/record_select.png"
    },
    {
      "pagePath": "/pages/user-center/user-center",
      "text": "个人中心",
      "iconPath": "/images/user_default.png",
      "selectedIconPath": "/images/user_select.png"
    }]
  },

  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
