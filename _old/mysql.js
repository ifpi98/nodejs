// 모듈 추출한다.
var http = require('http');
var express = require('express');
var mysql = require('mysql');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'company'
});

// 웹서버를 생성한다.
var app = express();
app.use(express.static('public'));  // 기본 폴더 지정
// post요청시 파라미터 전달
app.use(express.bodyParser());
app.use(app.router);

//라우터 설정
app.get('/products', function (req, res) {
    // client.query('use company');
    var query = 'select * from products';
    client.query(query, function (err, result) {
        // console.log(result);
        res.send(result);
    });
});

// 개별 조회
app.get('/products/:id', function (req, res) {
    var id = Number(req.param('id'));
    // var query = 'select * from products where id=' + id;
    var query = 'select * from products where id=?';
    client.query(query,[id], function (err, result) {
        if(result==""){
            res.send("없는 데이터입니다.");
        } else{
        // console.log(result);
        res.send(result);
        }
    });

});

// 데이터 추가

app.post('/products', function (req, res) {
    var name = req.param('name');
    var modelnumber = req.param('modelnumber');
    var series = req.param('series');
    // var query = "insert into products (name, modelnumber, series) values ('" + name + "','" + modelnumber + "','" + series + "')";
    var query = "insert into products (name, modelnumber, series) values (?,?,?)";
    client.query(query,[name, modelnumber, series], function (err, result) {
        // console.log(result);
        res.send(result);
    });

});
app.put('/products/:id', function (req, res) { 
    var id = req.params.id;
    var name = req.body.name;
    var modelnumber = req.body.modelnumber;
    var series = req.body.series;
    var query = "update products set name=?, modelnumber=?, series=? where id=?";
    console.log(query);
    client.query(query,[name, modelnumber, series, id], function (err, result) {
        // console.log(result);
        res.send(result);
    });

});
app.del('/products/:id', function (req, res) { 
    // var id = req.params.id;
    var id = Number(req.param('id'));
    // var name = req.body.name;
    // var modelnumber = req.body.modelnumber;
    // var series = req.body.series;
    var query = "DELETE FROM products WHERE id=?";
    // console.log(query);
    client.query(query,[id], function (err, data) {
        // console.log(result);
        // res.send(result);
        // if (err) throw err;
        console.log(data);
        if(data.affectedRows == 0){
            res.send("없는 데이터입니다");
        } else {
            res.send("id: " + id + "번을 삭제했습니다.")
        }
    });

});

//parameter
app.all ('/parameter', function(req,res){
    var name = req.body.name || req.query.name;
    var modelnumber = req.body.modelnumber || req.query.modelnumber;
    var series = req.body.series || req.query.series;

    var data = {name, modelnumber, series};
    var sql = "insert into products(name, modelnumber, series) values (?,?,?)";

    client.query(sql, [name, modelnumber, series], function(err, result){
        // console.log(data);
        if(result){
            res.send(data);
        } else {
            res.send(err)
        }
    })

})

// http://127.0.0.1:52273/parameter?name=park&modelnumber=333&series=student


// 웹서버를 실행한다.
http.createServer(app).listen(52273, function () {
    console.log("Server Running at ..");
    console.log("http://127.0.0.1:52273");
    console.log("http://127.0.0.1:52273/form1.html");
    
})

// var query = 'select * from products';
// client.query(query, function (err, result) {
//         console.log(result);
// });