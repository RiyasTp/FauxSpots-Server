const db = require("./db/connection")
const express = require("express")
const app = express()
const accountRoutes = require("./routes/accountRoutes")
const addRoutes = require("./routes/productRoutes")
const cors = require("cors")
const morgan = require("morgan")
const colors = require('colors')
const fileUpload = require("express-fileupload")


app.use(fileUpload())
app.use(cors())
app.use(morgan('dev'))

// db connect

db()

// local host

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server starting ${port}`))


//json converter

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// call 

app.use("/account", accountRoutes)

app.use("/admin", addRoutes)
