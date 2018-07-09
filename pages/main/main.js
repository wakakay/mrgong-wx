const App = getApp();
const _ = require('../../libs/underscore.js');
const api = require('../../utils/api.js');

Page({
    data: {
        indicatorDots: false,
        autoplay: false,
        interval: 3000,
        duration: 300,
        imagesList: ['http://gethost.runwise.cn//api/viewpager/1/-2226651241692749680/image/', 'http://gethost.runwise.cn//api/viewpager/1/-2226651241692749680/image/'],

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

        // self.__imagesList()
    },

    __imagesList () {
        let self = this

        api.viewpagerList({tag: '访客端'}, {
            success: (response) => {
                _.each(response.post_list, (item) => {
                    self.data.imagesList.push('https://gethost.runwise.cn/' + item.cover_url)
                })

                self.setData({
                    imagesList: self.data.imagesList,
                });
            }
        })
    }
})
