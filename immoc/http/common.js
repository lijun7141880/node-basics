/**
 * Created by ponovo on 2017/11/30.
 */
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'cid': 348
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/document',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=acc4391a-d033-4000-963e-a7fdbfa3d3a5; imooc_isnew_ct=1511529790; loginstate=1; apsid=MxYTc3ZDljZGQ0N2NiZTNiOGQzMDc1MjE2Y2ZlZjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDA2ODQwNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMDY4ODg4MjlAcXEuY29tAAAAAAAAAAAAAAAAAAAAADFiZjgzNWRiMDRkMDVjZGY3OTQ4YTM5ODA0ZDlhODI1EB8YWhAfGFo%3DZm; last_login_username=306888829%40qq.com; mc_channel=bdqdrmjt; mc_marking=dfed7876f5bea7644574b69f4bf3f3c7; UM_distinctid=15ffd74f8cf25a-0dbcdd262dc085-5b452a1d-100200-15ffd74f8d013e; CNZZDATA1261110065=1091817749-1511785567-https%253A%252F%252Fwww.baidu.com%252F%7C1511785567; PHPSESSID=mt6d79594r81526eegmj9hu725; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1511529793,1511611798,1511785822,1511955920; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1512044556; imooc_isnew=2; cvde=5a1e9dd3c441e-6',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req = http.request(options, function (res) {
    console.log('Status:' + res.statusCode);
    console.log('headers' + JSON.stringify(res.headers))

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })

    res.on('end', function () {
        console.log('评论完毕! ')
    })

});

req.on('error', function (e) {
    console.log('Error' + e.messsage);
});

req.write(postData);

req.end();

