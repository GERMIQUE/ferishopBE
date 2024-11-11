
/**importo la funcion get conexion desde conection.js */
import {getConnection,sql} from '../database/conection.js'

// Export , sirve para que se vea en otros lados, es como el "public" de visual studio

 

export const Listar_Clientes = async (req,res)=> {
     
    const pool = await getConnection();
    
    const result = await pool.request().query('Listar_Clientes 1')
    console.log(result)
    res.json(result.recordset) /**retorno el resultado */


}