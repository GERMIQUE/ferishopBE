import { Router } from 'express'
/** con esto puedo ver las entidades para traer informacion desde la BD */
import {Listar_Cabecerapedido, Listar_detallePedido,Listar_Clientes } from '../controllers/pedido.controllers.js'

const router = Router()

router.post('/Listar_Cabecerapedido',Listar_Cabecerapedido) 
router.post('/Listar_detallePedido',Listar_detallePedido) 
router.post('/Listar_Clientes',Listar_Clientes)


//router.post('/Insertar_Pedido',Insertar_Pedido) 
//router.post('/Actualizar_EstadoCabecerapedido',Actualizar_EstadoCabecerapedido) 
//router.post('/Insertar_CabeceraPedido',Insertar_CabeceraPedido) 




/**quiero que conteste algo por defecto */
//router.get('/productos')

 export default router