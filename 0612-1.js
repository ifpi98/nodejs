// nodejs 기본 실습하기
// 프로세스 객체
// 노드에서 모듈 사용하기
// 내장모듈
// 함수정의 - 기능하나 정의
// 함수 -> 모듈화 -> 재사용 -> 라이브러리
// 전역변수 window, global
// __filename, __dirname

console.log(__filename);
console.log(__dirname);
console.log(global);
// console.log(window);     // 없다. define되지 않았다.

// process객체 : 프로세스 정보를 다루는 객체
// argv, env, exit()

console.log(process.argv);
console.log(process.argv.length);

process.argv.forEach(function(item,index){
    console.log(index+":"+item);
});

// argv 프로세스를 실행할 때 전달되는 파라미터 정보
// env 환경변수
// console.log(process.env);
console.log(process.env['OS']);
console.log(process.env['PATH']);

// console.log(process.exit());

// 모듈(module)
// 별도의 파일로 분리된 독립된 기능
// exports 전역객체 사용한다.
// import, require()로 불러온다.




