const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

router.use('/writing', require('./writing'));

router.use('/table_maker', require('./table_maker'))

module.exports = router
