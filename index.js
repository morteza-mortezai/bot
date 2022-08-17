// http://t.me/morteza_20_bot
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
app.use(express.json())

const { TOKEN, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI

const initBot = async () => {
    try {
        // console.log('address',`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
        const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
        // console.log('res', res)
    } catch (error) {
        // console.log('error', error)
    }

}



app.post(URI, async (req, res) => {
    console.log('res', req.body)
    const chat_id = req.body.message.chat.id
    const text = req.body.message.text

    // send message
     axios.post(`${TELEGRAM_API}/sendMessage`, { chat_id, text })
    res.send('hi')
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, async () => {
    console.log('app is running')

    await initBot()

})