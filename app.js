const express = require('express')
const morgan = require('morgan')
const contactRouter = require('./contactRoutes.js')
const app = express()


// app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/contact', contactRouter)


const PORT = 5000

app.get('/', (req, res) => {
    res.send("<h1>This is homepage</h1>")
})


app.get('*', (req, res) => {
    res.send('404 !! Note Found!!!!!!!')
})


app.listen(PORT, () => {
    console.log("Listening port ", PORT)
})