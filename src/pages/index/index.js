"use strict";
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        title: '',
        articleList: [{
            id: 1,
            name: 'Event Loop（事件循环）',
            url: 'https://mp.weixin.qq.com/s/PYgEHWPYqEHiqM8vCadhyw'
        }, {
            id: 2,
            name: 'Promise源码',
            url: 'https://mp.weixin.qq.com/s/1RO1EE4sFU04xhqxEdJ2cA'
        }, {
            id: 3,
            name: 'call、apppy、bind',
            url: 'https://mp.weixin.qq.com/s/L1kjIyd4_pcgRJRyftVDqg'
        }, {
            id: 4,
            name: 'Vue源码解读之变化侦测篇',
            url: 'https://mp.weixin.qq.com/s/5VP33Ua4-tSGdvdwuXi5og'
        }, {
            id: 5,
            name: 'new 关键字',
            url: 'https://mp.weixin.qq.com/s/aKNU8F-ynUWyWoscOYXBpQ'
        }, {
            id: 6,
            name: '防抖与节流',
            url: 'https://mp.weixin.qq.com/s/xLxL0iyDU_ay8Tb8-gQWRQ'
        }, {
            id: 7,
            name: '移动端适配',
            url: 'https://mp.weixin.qq.com/s/J6kSSf0oh78Xx8QCv3a5ng',
        }, {
            id: 8,
            name: 'this指向',
            url: 'https://mp.weixin.qq.com/s/SxPVg701yjehbLIIJwGpxQ',
        }, {
            id: 9,
            name: '前端模块化（CommonJS、AMD、CMD）',
            url: 'https://mp.weixin.qq.com/s/UPt-scZYkrkiazkT6Ohbjg',
        }, {
            id: 10,
            name: 'require和import的区别',
            url: 'https://mp.weixin.qq.com/s/ga_YfGSkuBEdptSUhx1Z4g',
        }, {
            id: 11,
            name: 'JS中判断数据类型的4种方法',
            url: 'https://mp.weixin.qq.com/s/RF38hDiFTXuxttBJHvpz3Q',
        }]
    },

    onLoad: function () {
      
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
            this.setData({
                title: this.getTabBar().data.list[0].text
            });
        }
    },
    
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    goPublicArticle (e) {
        const { url } = e.currentTarget.dataset;
        wx.navigateTo({
          url: `/pages/h5-page/h5-page?url=${url}`,
        })
    }
});