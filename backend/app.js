const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const db = require("./db/db.js")

dotenv.config({path:'.env'})

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/v1/catCards", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM catcards ORDER BY cat_id ASC");
        res.status(200).json({
            status: "Success",
            results: results.rows.length,
            data: {
                catcards: results.rows
            },
        })
        console.log(results.rows)
    } catch (err) {
        console.error(err)
    }
}) 

app.post('/api/v1/catCards', async (req, res) => {
    try {
        const results = await db.query(
            "INSERT INTO catcards (cat_name, cat_breed) values ($1, $2)", [req.body.cat_name, req.body.cat_breed]
        )
        res.status(201).json({
            status : "Success",
            data: {
                catcards: results.rows
            }
        })
        console.log(results)
    } catch (err) {
        console.error(err)
    }
})

const PORT = process.env.PORT || 8081 

app.listen(PORT, console.log(`Server started on port ${PORT}`))    