const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.post("/", async(req, res) => {
    var connection = await pool.getConnection()
    
    var nickname = req.body.nickname
    var letter = req.body.letter_context
    var food_name = req.body.fEname

    console.log(nickname, letter, food_name)

    let [check_duplicate] = await connection.query('SELECT COUNT(name) AS duplicate FROM food_db.submitlist WHERE name=?', nickname);
    console.log(check_duplicate)

    if(check_duplicate[0]?.duplicate){
        res.status(400).json({
            result: 'fail',
            reason: 'DUPLICATE_ITEM',
            message: '호패가 중복되었소. 다른 호패로 변경해주오.'
        });
    }
    else {
        await connection.query('INSERT into submitlist(food_name, name, content) values(?, ?, ?);', [food_name, nickname, letter])

        res.status(200).json({
            result: 'success'
        });
    }
})

router.get('/success', (req, res) => {
    res.render('letter_success');
})

module.exports = router
