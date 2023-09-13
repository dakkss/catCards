import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/v1/catCards', async (req, res) => {
  const cards = await prisma.catCard.findMany()
  res.json(cards)
})

app.post('/api/v1/catCards', async (req, res) => {
  try {
    const cardData = req.body
    console.log(cardData)
    const newCard = await prisma.catCard.create({
      data: cardData
    })
    res.json(newCard)
  } catch (err) {
    console.log(err)
  }
})

const PORT = 8080 || 8081
  app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
}) 