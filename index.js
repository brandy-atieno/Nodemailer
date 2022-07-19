const express= require('express')
const mailRoute = require('./routes/mailRoute')
const port =5000
const app= express()
app.use( '/email', mailRoute )
app.listen(port,()=>console.log(`SERVER RUNNING AT ${port}`)
)
