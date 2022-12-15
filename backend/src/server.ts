import { Request, Response } from "express"
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

const instruments = [
    "EUR/USD",
    "GBP/USD",
    "JPY/USD",
    "EUR/JPY",
    "GBP/JPY",
    "EUR/GBP"
]

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'welcome to acronym browser'
    })
})

app.get('/getAllPrices', (req: Request, res: Response) => {
    let prices: any[] = [];
    instruments.forEach((instrument, index) => {
        const bid = (5 + Math.random() * 3) * (2 + Math.random() * 5);
        const ask = bid + Math.random() * 0.1;
        prices.push({
            "id": index + 1,
            instrument,
            bid,
            ask,
            timestamp: new Date().toISOString()
        })
    })
    res.status(200).json(prices);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})