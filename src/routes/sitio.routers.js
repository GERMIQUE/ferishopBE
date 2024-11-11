import { Router } from 'express'
/** con esto puedo ver las entidades para traer informacion desde la BD */
import { getSitios,select_sitio_x_padre,select_detalle_sitio_x_hijo
       } from '../controllers/sitio.controllers.js'

const router = Router()

router.post('/getSitios',getSitios)
router.post('/select_sitio_x_padre',select_sitio_x_padre)
router.post('/select_detalle_sitio_x_hijo',select_detalle_sitio_x_hijo)

//router.post('/getSitiosHijos',getSitiosHijos)




/**quiero que conteste algo por defecto */
//router.get('/productos')

 export default router