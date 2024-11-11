import { Router } from 'express'
/** con esto puedo ver las entidades para traer informacion desde la BD */
import {Listar_Clientes} from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/Listar_Clientes',Listar_Clientes) 


/**quiero que conteste algo por defecto */
//router.get('/productos')

 export default router