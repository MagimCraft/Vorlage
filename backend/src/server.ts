import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.listen(port, () => { //Starte das Backend
  console.log(`Backend-Server wurde auf Port ${port} gestartet!`)
})