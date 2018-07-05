const App = getApp();
const _ = require('../../libs/underscore.js');
const api = require('../../utils/api.js');

Page({
    data: {
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        imagesList: [],

        toView: 'red',
        scrollLeft: 100
    },
    onLoad(options) {
        let self = this
        wx.showToast({
            title: '正在加载',
            icon: 'loading',
            duration: 100,
        });

        self.__imagesList()
    },

    tap: function(e) {
        let order = ['green', 'red', 'yellow', 'blue']
        for (var i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1]
                })
                break
            }
        }
    },
    tapMove: function(e) {
        this.setData({
            scrollLeft: this.data.scrollLeft - 10
        })
    },

    __imagesList () {
        let self = this

        api.viewpagerList({tag: '访客端'}, {
            success: (response) => {
                _.each(response.post_list, (item) => {
                    self.data.imagesList.push('http://gethost.runwise.cn/' + item.cover_url)
                })

                self.setData({
                    imagesList: self.data.imagesList,
                });
            }
        })
    }
})
