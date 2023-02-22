const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const router = Router()

const pool = require('../DBconnection')


router.get("/", async(req, res) => {
    const connection = await pool.getConnection();
    let [data] = await connection.query('SELECT food_name, name FROM submitlist;');
    console.log(data);
    if(data.length > 0){
        res.status(200).json(data);
    }
    else{
        res.status(404).json(data);
    }
})

module.exports = router
