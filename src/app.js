import express from 'express';
import config from './config.js';
import cors from 'cors'

import sitioRoutes from './routes/sitio.routers.js'
import clientesRoutes from './routes/clientes.routers.js'
import pedidoRoutes from './routes/pedido.routers.js'

const app = express()

//let port;
//setting

app.use(cors())
app.set('port', config.port)

//que va a ocupar
app.use(express.json());
//para que reciva datos del formulario html
app.use(express.urlencoded({extended:false}));



app.use(sitioRoutes)
app.use(clientesRoutes)
app.use(pedidoRoutes)



export default app