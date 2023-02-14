const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.post("/", async(req, res) => {
    var connection = await pool.getConnection()
    
    var nickname = req.body.nickname
    var letter = req.body.letter_context
    var food_name = req.body.fEname

    console.log(nickname, letter, food_name)
    await connection.query('INSERT into submitlist(food_name, name, content) values(?, ?, ?);', [food_name, nickname, letter])

    res.render("letter_success")
})

module.exports = router
