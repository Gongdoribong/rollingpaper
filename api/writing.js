const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

router.post("/", async(req, res) => {




    res.redirect("/letter_success")
})

module.exports = router
