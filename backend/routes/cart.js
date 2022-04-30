const express = require("express");
const pool = require("../config");
const app = express()
const cors = require('cors');
app.use(cors());



router = express.Router();

router.get("/cart", async function (req, res, next) {
    try {
        let query = `select *
        from CART`
        const [rows, _] = await pool.query(query);
        res.send(rows)
      } catch (error) {
        return res.status(500).json(error)
        
      }
})



router.get("/cart/:cartId", async function (req, res, next) {
    const cartId = req.params.cartId
    console.log(cartId)
    
    try {
        let query = `select *
        from CART where cart_id=?`
        const [rows, _] = await pool.query(query, [cartId]);
        res.send(rows)
      } catch (error) {
        return res.status(500).json(error)
        
      }
})


exports.router = router