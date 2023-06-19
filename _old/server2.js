// 모듈을 추출한다.
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.use(app.router);
// 라우트 처리
app.all("/a",function(req,res){
    res.send("<h1>Page A.....</h1>");
});
app.all("/b",function(req,res){
    res.send("<h1>Page B.....</h1>");
});
app.all("/c",function(req,res){
    res.send("<h1>Page C.....</h1>");
});

app.use(function(req,res){
    res.send("<h1>잘못들어오신것같은데요^.^!</h1>");
});

// 서버를 실행한다
http.createServer(app).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
});

