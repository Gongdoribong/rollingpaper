const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.get("/", async(req, res) => {
    var connection = await pool.getConnection()
    let {option} = req.query
    res.render("letter_writing")
})

module.exports = router
