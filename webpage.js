const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.get("/", async(req, res) => {
    res.render("main")
})

router.get("/food_select", async(req, res) => {
    res.render("letter_food_select")
})

router.get("/main_letter", async(req, res) => {
    var connection = await pool.getConnection()
    var food_option = req.query.option

    var [data] = await connection.query('SELECT name, description FROM food_db.food WHERE food_name = ?', food_option)

    var food_name = data[0]?.name
    var food_description = data[0]?.description

    res.render("letter_writing", { fEname:food_option, fname: food_name, fdes: food_description })
})

router.get("/success", async(req, res) => {
    res.render("letter_success")
})

router.get("/help", async(req, res) => {
    res.render("help")
})

module.exports = router
