const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.post("/", async(req, res) => {
    var connection = await pool.getConnection()
    
    var nickname = req.body.nickname
    var letter = req.body.letter_context
    var food_name = req.body.fEname

    console.log(nickname, letter, food_name)

    let [check_duplicate] = connection.query('SELECT COUNT(name) AS duplicate FROM submitlist WHERE name=?', nickname);

    if(check_duplicate[0]?.duplicate){
        res.status(400).json({
            result: 'fail',
            reason: 'DUPLICATE_ITEM',
            message: '중복된 이름은 사용할 수 없습니다.'
        });
    }
    else {
        await connection.query('INSERT into submitlist(food_name, name, content) values(?, ?, ?);', [food_name, nickname, letter])

        res.status(200).json({
            result: 'success'
        });
    }
})

module.exports = router
