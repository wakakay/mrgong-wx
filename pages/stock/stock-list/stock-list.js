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
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 获得dialog组件
        let self = this
        self.dialog = self.selectComponent("#dialog");
        self.tabPage = self.selectComponent("#tab-page");
        self.footerTab = self.selectComponent("#footer-tab");
    },

    onLoad() {
        let self = this
        //wx.hideTabBar({})

        // 获取系统信息
        wx.getSystemInfo({
            success: function (response) {
                self.setData({
                    srcollHeight: response.windowHeight - 80 - 58 - 64,
                })
            }
        })
    },
    getSearch() {
        wx.navigateTo({
            url: `../stock-search/stock-search`
        })
    },
    getNav(data) {
        console.log(11, data)
    }
})

