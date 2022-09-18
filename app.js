const db = require("./db/connection")
const express = require("express")
const app = express()
const accountRoutes = require("./routes/accountRoutes")
const addRoutes = require("./routes/productRoutes")


// db connect
db.on('error', console.error.bind(console, 'Mongodb connection failed'))

// local host

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server starting ${port}`))


//json converter

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// call 

app.use("/account", accountRoutes)

app.use("/add", addRoutes)


