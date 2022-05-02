const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const indexRouter = require('./routes/index')
const booksRouter = require('./routes/books')
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')

app.use(indexRouter.router)
app.use(booksRouter.router)
app.use(userRouter.router)
app.use(cartRouter.router)
app.use(orderRouter.router)

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})
