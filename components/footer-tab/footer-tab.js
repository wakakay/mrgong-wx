/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/7/23      1.0     First version
 *
 */

const _ = require('../../libs/underscore.js')

Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
        list: [
            {
                title: "首页",
                icon: 'icon-home',
                url: '../../pages/main/main'
            },
            {
                title: "下单",
                icon: 'icon-order',
                url: '../../pages/order/order-list'
            },
            {
                title: "库存",
                icon: 'icon-stock',
                url: '../../pages/stock/stock-list'
            },
            {
                title: "更多",
                icon: 'icon-other',
                url: '../../pages/other/other'
            }
        ]
    },

    ready() {

    },
    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {

    }
})
