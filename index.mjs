import express from "express"
import os from "os"

const app = express()
const PORT = 3000

app.get('/' , (req , res) => {
    const hostMessage = `hello from the ${os.hostname()}`
    console.log(hostMessage)
    res. send(hostMessage)
})

app.listen(PORT , () => {
     console.log(`Web server is running on port ${PORT}`)
})