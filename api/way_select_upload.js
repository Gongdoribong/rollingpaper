const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

router.get("/", async(req, res) => {
    let {option} = req.query
    res.render("picture_upload")
})

module.exports = router
