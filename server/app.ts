import express from 'express'
import cors from 'cors'
import router from './src/router'
import options from './corsOptions'

const app = express()

app.use(cors(options))
app.use(express.json())
app.use(router)

export default app