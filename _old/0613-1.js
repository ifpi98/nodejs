// 파일 다루기
// 동기식과 비동기식
// Sync -> 동기식
// readFile -> 비동기
// readFileSync 
// writeFile -> 비동기
// writeFileSync
// https://nodejs.dev
// nodejsdev readfile
// 파일 시스템 모듈

// 동기식 readFileSync
var fs = require('fs');
var data = fs.readFileSync('./test.txt','utf-8');
// console.log(data);

// 비동기식 readFile -> callback
// 파일 입출력은 예외처리구문이 반드시 들어간다.

// fs.readFile('./test.txt2','utf-8',(err,data) => {
//     if(err) console.log("파일이 없습니다");
//     console.log(data);
// });

try{
    fs.readFile('./test.txt','utf-8',(err,data) => {
        // console.log(data);
        // if(err) throw err;
    });
}catch(err){
    // console.log(err);
}

// 파일쓰기
fs.writeFileSync("output.txt","오늘은화요일");
// console.log("파일쓰기가 완료되었다");
var out1 = fs.readFileSync("output.txt","utf-8");
// console.log(out1);
var out1 = fs.readFileSync("output.txt");
// console.log(out1);
// console.log(out1.toString());

try {
    var out1 = fs.readFileSync("output2.txt");
    // console.log(out1.toString());
} catch(e){
    // console.log("파일 에러 발생....")
    // console.log(e);
}

// 비동기 방식 파일 쓰기
// fs.writeFile("output3.txt","오늘은화요일",(err,data) => {
//     if(err) throw err;
//     console.log("파일쓰기가 완료되었다");
//     var out3 = fs.readFileSync("output3.txt","utf-8");
//     console.log(out3);
// });

var str1 = "hello world happy new year";
fs.writeFile("hello.txt", str1, function(err){
    if(err) console.log(err);
});
// console.log("비동기식 파일쓰기 완료");

fs.readFile('hello.txt','utf-8',function(err,data){
    // console.log(data);
});
// console.log(data);

// 파일을 직접 열고 닫으면서 읽고 쓰기
// open, read, write, close
// .open .read .write .close

// 파일을 직접 열고 데이터쓰기
fs.open("./output.txt","w",function(err,fd){
    var buf = new Buffer("안녕이라고 말하지마\n");
    fs.write(fd, buf, 0, buf.length, null, function(err, write, buffer){
        // console.log(err, write, buffer);
        fs.close(fd,function(){
            // console.log("파일 열고 쓰기 완료");
        })
    })
});

// new Buffer("글자") Buffer.alloc("텍스트")
// 파일을 직접 열고 읽기
fs.open("./output.txt","r",function(err,fd){
    var buf = new Buffer(30);
    fs.read(fd, buf, 0, buf.length, null, function(err, read, buffer){
        var inStr = buffer.toString('utf8',0,read)
        // console.log("파일에서 읽은 데이터: ------", inStr);
        // console.log(err, read, buffer);
        fs.close(fd,function(){
            // console.log("파일 열고 읽기 완료");
        })
    })
});

// 버퍼사용하기
var output = "안녕이라고 말하지마";
var buffer1 = new Buffer.alloc(30);
var len = buffer1.write(output,'utf8');
// console.log('this***', buffer1.toString());

var buffer2 = new Buffer.alloc(40);
var output2 = "안녕이라고 말하지 마세요";
var len = buffer2.write(output2,'utf8');
// var buffer2 = new Buffer("이승철", "utf8");
// console.log('this****', buffer2.toString());
// console.log('this*****', len);

// buffer1.copy(buffer2,0,0,len+10);
// console.log(buffer2.toString());
// console.log(buffer1.toString());

var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("this ####### - ", buffer3.toString());

// 스트림 단위로 파일 읽고 쓰기

var infile = fs.createReadStream('./output.txt', {flags:'r'});
var outfile = fs.createWriteStream('./output2.txt', {flags:'w'});

infile.on('data',function(data){
    console.log("읽어들인 데이터", data.toString())
    outfile.write(data);
});

infile.on('end',function(data){
    console.log("읽기 종료")
    outfile.end(function(){
        console.log("쓰기 종료")
    });
});

// 새 디렉토리 만들고 삭제
// fs.mkdir("./새폴더",0o777,function(err){
//     console.log("새폴더 생성됨");
// });

fs.rmdir("./새폴더",function(err){
    if (err) throw err;
    console.log("폴더 삭제");
});