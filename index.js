import express from 'express'
import bodyParser from 'body-parser'

import router from './src/routes'

const app = express()

const PORT = 3001

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})