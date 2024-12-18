const express = require('express')
const postRouter = require('./routes/postRoute')
const reviewRouter = require('./routes/reviewModel')
const mongoose = require('mongoose')




const app = express()
const port = 3000

const Database = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://harjindersinghnet:cixCxpXyWrBrRQqe@cluster0.pydrb.mongodb.net/rating?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Database is successfully connected')
    } catch (error) {
        console.log('DB is not connected Please try again')
    }
}
Database()

app.use(express.json())


app.use('/post', postRouter)
app.use('/review', reviewRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})