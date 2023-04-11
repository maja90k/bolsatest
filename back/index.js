const express = require('express')
const fs = require('fs');
const cors = require('cors')
const app = express()
const port = 9090

app.use(cors());

//GET - /api/symbols/
app.get('/api/symbols', (req, res) => {
    let rawdata = fs.readFileSync('./data/symbols.json')
    let symbolsdata = JSON.parse(rawdata)
    
    res.json(symbolsdata)
})

//GET -  /api/symbols/<symbol>
app.get('/api/symbols/:symbol', (req, res) => {
    const symbol = req.params.symbol

    const rawdata = fs.readFileSync('./data/symbols.json')
    const symbolsdata = JSON.parse(rawdata)

    const symbolfilter = symbolsdata.symbolsList.filter((v) => {
        if (v.symbol == symbol) {
            return v
        }
    })

    res.json(symbolfilter)
})

// /api/historical
app.get('/api/historical', (req, res) => {
    const rawdata = fs.readFileSync('data/historical.json')
    const symbolsdata = JSON.parse(rawdata)

    res.json(symbolsdata)
})

// /api/historical/<symbol>
app.get('/api/historical/:symbol', (req, res) => {
    const symbol = req.params.symbol

    const rawdata = fs.readFileSync('./data/historical.json')
    const historicaldata = JSON.parse(rawdata)

    const symbolfilter = historicaldata.historicalStockList.filter((v) => {
        if (v.symbol == symbol) {
            return v
        }
    })

    res.json(symbolfilter)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})