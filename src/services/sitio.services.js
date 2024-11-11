import { getConnection as db } from '../database/conection.js';


// import axios from 'axios';

class Sitio {
    constructor(user) {
        /*
        this.usuario = user.usuario.toUpperCase();
        this.filial = user.filial.toUpperCase();
        this.ID_BD_SISTEMA = process.env.ID_BD_SISTEMA
        this.URL_BE_SISTEMA_MENU = process.env.URL_BE_SISTEMA_MENU
        */
    }

    async getSitios(p_params) {
        try {
            console.log("p_params = ", p_params)
            
            const query = ` SELECT id as id, 
                id_padre as id_padre,
                id_hijo as id_hijo,
                titulo as  titulo,
                activo as activo,
                glosa as glosa,
                orden as orden
            FROM  sitio
            where id_padre = CASE WHEN $1 = 0 THEN id_padre
                            ELSE $1 END
            and activo = CASE WHEN $2 = 1 THEN true
                            WHEN $2 = 0 THEN false ELSE activo END
                            and id_hijo is null
                            and id_padre <> 1 `
            
            const p_id_padre = p_params.p_id_padre
            const p_activo = p_params.p_activo
            
            return await db.any(query, [p_id_padre, p_activo]);
        } catch (error) {
            console.log(error)
            throw new Error('Error en proceso');
        }
    }

    async select_sitio_x_padre(p_params) {
        try {
            console.log("p_params = ", p_params)
            
            const query = ` SELECT * from select_sitio_x_padre($1) `
            const p_id_padre = p_params.p_id_padre
            
            console.log(new Date())
            const resultado = await db.any(query, [p_id_padre]);
            console.log("", resultado)
            console.log(new Date())
            return resultado
        } catch (error) {
            console.log(error)
            throw new Error('Error en proceso');
        }
    }

    async select_detalle_sitio_x_hijo(p_params) {
        try {
            console.log("p_params = ", p_params)
            
            const query = ` SELECT * from select_detalle_sitio_x_hijo($1) `
            const p_id_hijo = p_params.p_id_hijo
            
            console.log(new Date())
            const resultado = await db.any(query, [p_id_hijo]);
            console.log("", resultado)
            console.log(new Date())
            return resultado
        } catch (error) {
            console.log(error)
            throw new Error('Error en proceso');
        }
    }
}

export default Sitio;