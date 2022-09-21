import express from 'express'
import router from './routes'
import mongoose from 'mongoose'
import env from './config/env'
import config from './config/env'
const app = express()
app.use(express.json())
mongoose.connect(env.mongoUrl).then(()=>{
  console.log(`[Server] Database connected successfully`)
}).catch(e => {
  console.error(`[Server] Error while trying to connect database: `, {message: e?.message, stack: e?.stack})
})

app.use(router)
app.listen(config.port, ()=>{
  console.log(`Server is running on port ${config.port}`)
})