/**
 * Created by Thinkpad on 2015/6/27.
 */
/**
 * ÊÂ¼şÇı¶¯
 * $('#btn').click(function(){
 * alert('aa');
 * }
 */

var http = require('http');
var server = http.createServer(function(req,res){
    console.time('label');
    for(var i=0;i<1000000;i++){

    }
    console.timeEnd('label');
    res.end('over');
});
server.listen(8080);