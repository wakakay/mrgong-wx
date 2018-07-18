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
    data: {},
    onLoad() {

    },

    getCancel() {
        wx.switchTab({
            url: `../stock-list/stock-list`
        })
    }
})

