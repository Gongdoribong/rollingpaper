const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

router.use("/food_select", require("./food_select"))

module.exports = router