/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/7/19      1.0     First version
 *
 */
const _ = require('../../libs/underscore.js')

Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    properties: {
        categroyList: {
            type: Array,
            value: []
        }
    },

    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
        navInfoList: []
    },

    ready() {
        let self = this
        // 获取每个导航的宽度
        var query = wx.createSelectorQuery().in(this)
        query.selectAll('.ui-item').boundingClientRect(function(response){
            _.each(response, (item, index) => {
                item.id = index + 1
            });

            self.setData({
                navInfoList: response,
            })
        }).exec()
    },
    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {
        getNav(e) {
            let self = this
            let currentNav = e.currentTarget.dataset.params
            let id = parseInt(e.currentTarget.id)

            let item = _.find(self.data.navInfoList, {id: id})
            _.extend(currentNav, item)

            self.setData({
                currentNav: currentNav
            })
            // 通知
            self.triggerEvent('Click', self.data.currentNav)
        }
    }
})
