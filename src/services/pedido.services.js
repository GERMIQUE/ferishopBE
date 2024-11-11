
/**importo la funcion get conexion desde conection.js */
import {getConnection,sql} from '../database/conection.js'

class Pedido {
    async Listar_Cabecerapedido (p_param)  {


     
    console.log("resultado 1 =" +  p_param)
    console.log("resultado =" +  p_param.data)

    
     
    const pool = await getConnection();
    
    const result = await pool.request().input("idCliente",sql.Numeric,p_param.idCliente)
                             .query('Listar_Cabecerapedido @idCliente')
    console.log(result)

    return result
   // res.json(result.recordset) /**retorno el resultado */


}

 


async  Listar_detallePedido  (p_param)  {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("nropedido",sql.Numeric,p_params.nropedido)
                             .query('Listar_detallePedido @nropedido')
    console.log(result)
    return result
   // res.json(result.recordset) /**retorno el resultado */


}

async  Listar_Clientes  (p_param)  {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("nropedido",sql.Numeric,1)
                             .query('Listar_Clientes @nropedido')
    console.log(result)
    return result
   // res.json(result.recordset) /**retorno el resultado */


}

 



 
    

}   

export default Pedido;