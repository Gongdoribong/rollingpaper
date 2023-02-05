const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '03131j..',
    database: 'foodList'
};

let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속

let sql = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";

connection.query(sql, function (err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

sql = "SELECT * FROM MEMBERS";

connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});


connection.end(); // DB 접속 종료