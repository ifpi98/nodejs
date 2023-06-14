var url = require("url");
var curURL = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=nodejs");

// console.log(curURL);
var curStr = url.format(curURL);
// console.log(curStr);

var { URL } = require("url");
var curURL = new URL("https://search.naver.com/search.naver?where=nexarch&sm=top_hty&fbm=0&ie=utf8&query=nodejs");

// console.log(curURL);
var curStr = curURL.href;
// console.log(curStr);


//querystring 모듈
//parse() 요청파라미터문자열을 파라미터객체로
//stringify() 파라미터객체를 문자열로

// var curURL = new URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=it+study");
var curURL = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=it+study");
// console.log(curURL);

var querystring = require("querystring");
var param = querystring.parse(curURL.query);
console.log(param);
console.log(param.query);
console.log(querystring.stringify(param));

var { URLSearchParams, URL } = require("url");
var curURL = new URL("https://search.naver.com/search.naver?where=nexarch&sm=top_hty&fbm=0&ie=utf8&query=it+study");

var params = new URLSearchParams(curURL.search);
var paramsObj = Object.fromEntries(params.entries());
console.log(paramsObj);
console.log(params.get("query"));
console.log(params.toString());

// 이벤트 보내고 받기
// 비동기방식으로 데이터를 한쪽에서 다른쪽으로 전달한다.
// emit으로 보내고 다른 쪽에서 리스너를 등록해서 on으로 받는다.

process.on("exit", function(){
    // console.log("exit 이벤트 발생함");
});

setTimeout(function(){
    // console.log("2초 뒤에 시스템 종료시도함");
    process.exit();
},2000);

var Calc = require("./calc3");
var calc = new Calc();

calc.emit("stop");

console.log(Calc.title + "에 이벤트 전달함");

console.log(calc.add(5,5));
