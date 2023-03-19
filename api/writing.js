const {Router} = require("express") //express 안에 있는것 중에서 Router class만 빼오겟다
const pool = require("../DBconnection")
const router = Router()

router.post("/", async (req, res) => {
    var connection = await pool.getConnection()

    var nickname = req.body.nickname
    var letter = req.body.letter_context
    var food_name = req.body.fEname

    try {
        await connection.beginTransaction();

        await connection.query('INSERT into submitlist(food_name, name, content) values(?, ?, ?);', [food_name, nickname, letter])

        let [sel_result] = await connection.query('SELECT * FROM submitlist WHERE `name` = ?', nickname);

        if(sel_result.length === 1 && food_name === sel_result[0].food_name){
            res.status(200).json({
                result: 'success'
            });
        }
        else{
            throw {
                reason: 'DB_VALIDATION_FAILED'
            }
        }

    } catch (e) {
        connection.rollback();

        let body = {
            result: 'fail',
            reason: 'UNKNOWN',
            message: '예기치 않은 문제로 등록에 실패하였소.'
        }
        if(e.code){
            switch (e.code) {
                case 'ER_DUP_ENTRY':
                    body.reason = 'DUPLICATE_ITEM';
                    body.message = '호패가 중복되었소. 다른 호패로 변경해주오.';
                    break;
            }
        }
        else {
            body = Object.assign(body, e);
        }

        res.status(400).json(body);
    } finally {
        connection.release();
    }
})

router.get('/success', (req, res) => {
    res.render('letter_success');
})

module.exports = router
