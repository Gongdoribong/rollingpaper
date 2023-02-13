const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()
const bodyParser = require("body-parser")


router.post("/", async(req, res) => {
    var connection = await pool.getConnection()
    
    //form 처리된 nickname / letter_context를 food_db.submitList에 저장 + 음식 이름이랑 설명도 join 해서... 
    var nickname = req.query.nickname
    var letter = req.query.letter_context
    

    let {option} = req.query
    res.render("letter_success")
})

module.exports = router
