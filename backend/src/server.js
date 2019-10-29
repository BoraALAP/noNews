import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'

const app = express();
app.use(cors())

console.log(process.env.MY_SECRET)

app.get('/api', (req,res) => {
  res.send('Hello World! How are you?')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})