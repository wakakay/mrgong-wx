const baseUrl = 'http://gethost.runwise.cn'

const wxRequest = (actionObj) => {
    let url = baseUrl + actionObj.url
    wx.request({
        url,
        method: actionObj.method || 'post',
        data: actionObj.params || {},
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        success(response) {
            if (!actionObj.callBack.success) {
                return
            }
            let results = response.data.result
            if ('A0006' === results.state) {
                actionObj.callBack.success(results)
            }
        },
        fail(response) {
            if (actionObj.callBack.fail) {
                actionObj.callBack.fail(response)
            }
        },
        complete(response) {
            if (actionObj.callBack.complete) {
                actionObj.callBack.complete(response)
            }
        }
    })
}

module.exports =  {
    viewpagerList(params, callBack){
        wxRequest({method: 'post', url: '/api/viewpager/list/', params: params, callBack: callBack})
    }
}
