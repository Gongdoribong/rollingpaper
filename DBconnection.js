const mysql = require('mysql2/promise')  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '03131j..',
    database: 'food_db'
}

var pool = mysql.createPool(conn); // DB 커넥션 생성

/*(async function(){
    var connection = await pool.getConnection()
    var sql = "SELECT * FROM food_db.food;"
    
    try{
        var [data] = await connection.query(sql)
        console.log(data)
    }
    catch(e){
        console.error(e)
    }

    connection.release()
})()
*/

module.exports = pool
