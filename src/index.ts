import express, { Request, Response } from 'express'
const app = express()


app.get('/healthcheck', (req: Request, res: Response) => {
  res.send({message: 'ok'})
})

app.listen(3000, ()=>{
  console.log(`Server is running on port 3000`)
})