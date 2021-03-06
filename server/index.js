const express = require("express")




const app = express()

app.set('secret', 'adada15f6aa6sd5a6d')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})