const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

router.use("/main_letter", require("./main_letter"))

router.use("/main_help", require("./main_help"))

router.use("/food_select", require("./food_select"))

router.use("/writing", require("./writing"))

router.use("/success", require("./success"))

router.use("/drawing", require("./drawing"))

router.use('/table_maker', require('./table_maker'))

router.use("/upload", require("./upload"))

router.use("/way_select_drawing", require("./way_select_drawing"))

router.use("/way_select_upload", require("./way_select_upload"))



module.exports = router
