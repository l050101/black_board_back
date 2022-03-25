const express = require('express')
const app = express()

app.set('port',process.env.PORT || 8080)

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/test.json')
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'빈 포트에서 실행')
})