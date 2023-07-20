// 모듈 추출한다.
var http = require('http');
var express = require('express');
var mysql = require('mysql');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'college'
});

// 웹서버를 생성한다.
var app = express();
app.use(express.static('public'));  // 기본 폴더 지정
// post요청시 파라미터 전달
app.use(express.bodyParser());
app.use(app.router);

//라우터 설정
app.get('/students', function (req, res) {
    var sql = 'select * from students';
    client.query(sql, function (err, result) {
        // console.log(result);
        res.send(result);
    });
});

// 개별 조회
app.get('/students/:id', function (req, res) {
    var id=req.params.id;
    var sql="select * from students where id='"+id+"'";

    client.query(sql,[id],function(err,result) {
        res.send(result);
        // res.redi
    });

});


// 데이터 추가, 회원 가입
app.post('/students', function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var gender = req.body.gender;
    var data = {id, name, password, email, gender}
    // console.log(data);
    
    var sql = "insert into students (id, name, password, email, gender) values (?,?,?,?,?)";
    client.query(sql,[id, name, password, email, gender], function (err, result) {
        console.log("err:", err);
        // console.log("result:", result);
        if(!res.status(200)){
            res.send(err)
        } else {
            // res.send(result)
            res.redirect("member_ok.html");
        }
        
        // if(err){
        //     console.log("error: ", err.sqlMessage);
        // }
        // if(result){
        //     res.redirect("member_ok.html");
        // }else{
        //     res.send(err || result);
        // }
        
    });

});
app.put('/students/:id', function (req, res) { 
    var id = req.body.id;
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var gender = req.body.gender;
    var data = {id, name, password, email, gender};
    // console.log("this is a", data);

    var sql = "update students set name=?, password=?, email=?, gender=? where id=?";
    client.query(sql,[name, password, email, gender, id], function (err, result) {
        
        if(err){
            res.send(err)
        } else {
            res.send(result)
            // res.redirect("member_ok.html");
        }
        
        // res.redirect("../member_ok.html");
        // res.send(err || result);
    });

});
app.del('/students/:id', function (req, res) { 
    var id = req.params.id;
    // console.log(id);
    var sql = "DELETE FROM students WHERE id=?";
    // // console.log(query);
    client.query(sql,[id], function (err, data) {
    // console.log(result);
        // res.send(data);
    // if (err) throw err;
        console.log(data);
        if(data.affectedRows == 0){
            res.send("없는 데이터입니다");
        } else {
            res.send("id: " + id + "를 삭제했습니다.")
        }
    });

});

//parameter
app.all ('/parameter', function(req,res){
    // var name = req.body.name || req.query.name;
    // var modelnumber = req.body.modelnumber || req.query.modelnumber;
    // var series = req.body.series || req.query.series;

    // var data = {name, modelnumber, series};
    // var sql = "insert into products(name, modelnumber, series) values (?,?,?)";

    // client.query(sql, [name, modelnumber, series], function(err, result){
    //     // console.log(data);
    //     if(result){
    //         res.send(data);
    //     } else {
    //         res.send(err)
    //     }
    // })

})

// http://127.0.0.1:52273/parameter?name=park&modelnumber=333&series=student


// 웹서버를 실행한다.
http.createServer(app).listen(52273, function () {
    console.log("Server Running at ..");
    console.log("http://127.0.0.1:52273");
    console.log("http://127.0.0.1:52273/member.html");
    
})

// var query = 'select * from products';
// client.query(query, function (err, result) {
//         console.log(result);
// });