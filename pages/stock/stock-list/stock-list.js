/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/7/3      1.0     First version
 *
 */
const _ = require('../../../libs/underscore.js')
Page({
    data: {
        srcollHeight: 0,
        currentNav: {
            id: 1,
            categoryParent: '全部'
        },
        navInfoList: [],
        category: [
            {
                id: 1,
                categoryParent: '全部'
            },
            {
                "id": 2,
                "categoryParent": "水果",
                "categoryChild": [
                    "热带水果",
                    "苹果",
                    "梨",
                    "橘柑橙柚",
                    "浆果",
                    "核果",
                    "瓜果",
                    "特选果品"
                ]
            },
            {
                "id": 3,
                "categoryParent": "蔬菜",
                "categoryChild": [
                    "叶菜",
                    "结球类",
                    "瓜果类",
                    "根茎类",
                    "调味品",
                    "菇类",
                    "豆芽"
                ]
            },
            {
                "id": 4,
                "categoryParent": "水产类",
                "categoryChild": [
                    "淡水鱼类",
                    "海产类"
                ]
            },
            {
                "id": 5,
                "categoryParent": "冻品类",
                "categoryChild": [
                    "冻半成品"
                ]
            },
            {
                "id": 6,
                "categoryParent": "调味料饮品",
                "categoryChild": [
                    "调味料",
                    "烘焙"
                ]
            },
            {
                "id": 7,
                "categoryParent": "用品",
                "categoryChild": []
            },
            {
                "id": 8,
                "categoryParent": "干货粮油",
                "categoryChild": [
                    "粮油粉面",
                    "南北干货",
                    "咸腊味",
                    "杂粮",
                    "鲜蛋"
                ]
            },
            {
                "id": 9,
                "categoryParent": "鲜肉类",
                "categoryChild": [
                    "牛肉",
                    "猪肉",
                    "家禽"
                ]
            },
            {
                "id": 10,
                "categoryParent": "熟食",
                "categoryChild": [
                    "豆制品",
                    "粉面制品"
                ]
            }
        ],
        products: []
    },
    onLoad() {
        let self = this

        //wx.hideTabBar({})

        // 获取系统信息
        wx.getSystemInfo({
            success: function (response) {
                self.setData({
                    srcollHeight: response.windowHeight - 80,
                })
            }
        })
        // 获取每个导航的宽度
        let query = wx.createSelectorQuery()
        query.selectAll('.ui-item').boundingClientRect()
        query.exec(function (response) {
            _.each(response[0], (item, index) => {
                item.id = index + 1
            })
            self.setData({
                navInfoList: response[0],
            })
        })
    },

    getSearch() {
        wx.navigateTo({
            url: `../stock-search/stock-search`
        })
    },
    getNav(e) {
        let self = this
        let currentNav = e.currentTarget.dataset.params
        let id = parseInt(e.currentTarget.id)

        let item = _.find(self.data.navInfoList, {id: id})
        _.extend(currentNav, item)

        self.setData({
            currentNav: currentNav
        })
    }
})

