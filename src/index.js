import app from './app.js'

//import  './database/conection'
app.listen(app.get('port'))
console.log('Puerto en el se servidor:', app.get('port'))