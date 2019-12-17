const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./routes/index')

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(rutas)

//static files
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log("Server started in port", app.get('port'))
})