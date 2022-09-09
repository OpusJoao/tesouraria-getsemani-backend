import express from 'express'
import router from './routes'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb+srv://admin:F0JfqC4GrciQkdoK@treasury.lffsy4b.mongodb.net/?retryWrites=true&w=majority').then(()=>{
  console.log(`[Server] Database connected successfully`)
}).catch(e => {
  console.error(`[Server] Error while trying to connect database: `, {message: e?.message, stack: e?.stack})
})

app.use(router)
app.listen(3000, ()=>{
  console.log(`Server is running on port 3000`)
})