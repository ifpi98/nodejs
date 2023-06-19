// 모듈을 추출한다.
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(app.router);
// 라우트 처리

var items=[
    {name:"우유", price:2000},
    {name:"커피", price:1000},
    {name:"홍차", price:3000}
];

app.all("/food", function(request, response){
    var out = "";
    items.forEach((item)=>{
        out += "<ul>";
        out += "<li>"+item.name+"</li>";
        out += "<li>"+item.price+"</li>";
        out += "</ul>";
    })
    response.send(out);
})

app.all("/foodjson", function(request, response){
    response.send(items);
})

app.all("/foodxml", function(request, response){
    var out = "";
    out += '<?xml version="1.0" encoding="utf-8" ?>';
    out += "<products>";
    items.forEach((item)=>{
        out += "<product>";
        out += "<name>"+item.name+" </name>";
        out += "<price>"+item.price+" </price>";
        out += "</product>";
    })
    out += "</products>"
    response.type("text/xml");
    response.send(out);
})


app.get("/aaa", (req,res)=>{
// 상태코드 설정
    res.status(404);
// 응답헤더 설정
    res.set("AAA","BBB");
    res.set({
        'name':"welcome",
        'age': "20"
    });
    res.send("내 마음대로 입력해보자")

});


// 서버를 실행한다
http.createServer(app).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
});

