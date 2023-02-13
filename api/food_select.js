const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.get("/", async(req, res) => {
    var connection = await pool.getConnection()
    var food_option = req.query.option

    var [food_name] = await connection.query('SELECT name FROM food_db.food WHERE food_name = ?;', food_option)
    var [food_description] = await connection.query('SELECT description FROM food_db.food WHERE food_name = ?;', food_option)

    console.log(food_name, food_description)

    let {option} = req.query
    res.render("letter_writing", { fname: food_name, fdes: food_description })
})

module.exports = router
