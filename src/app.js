import express from "express";
import {pool} from './db.js'
import { PORT } from "./config.js";
import cors from "cors"


const app = express()


app.use(cors())

app.get('/', async (req, res) => {
    const [rows] = await pool.query('select * from peliculas')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "hello world " as RESULT')
    console.log(result)

    res.send('Bienvenido al Servidor')
})

app.get('/create', async (req, res) => {
    const result = await pool.query()

    res,json(result)
})

app.listen(PORT)
console.log('Server on port 3000', PORT)