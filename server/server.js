require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')

const { router } = require('./src/routes/router')

app.use(express.json())
app.use(cors())
app.use('/api/', router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
