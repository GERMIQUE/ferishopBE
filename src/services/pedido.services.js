
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

 


async  Listar_detallePedido  (p_params)  {
     
    const pool = await getConnection();
     console.log(p_params)
    const result = await pool.request().input("nropedido",sql.Numeric,p_params.nropedid)
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

async  Listar_Productos  (p_param)  {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("id_organizacion",sql.Numeric,1)
                             .query('Listar_Productos @id_organizacion')
    console.log(result)
    return result
   // res.json(result.recordset) /**retorno el resultado */


}
async  Listar_Detalle_Productos  (p_param)  {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("id_organizacion",sql.Numeric,1)
                             .query('Listar_Detalle_Productos @id_organizacion')
    console.log(result)
    return result
   // res.json(result.recordset) /**retorno el resultado */


}


/*
async  Listar_Cabecerapedido  (p_param)  {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("idcliente",sql.Numeric,1)
                             .query('Listar_Cabecerapedido @idcliente')
    console.log(result)
    return result
   // res.json(result.recordset) /**retorno el resultado  


}

*/

async Insertar_CabeceraPedido (p_param)  {

      
     
    
    const pool = await getConnection();
        
    
    console.log(" p_param= ")
    console.log(p_param)
    console.log(p_param.length)

     
    const result =  await pool.request().input("idCliente",sql.Numeric,p_param[0].idCliente)
                        .input("idOrganizacion",1)                        
                        .query('Insertar_CabeceraPedido @idCliente , @idOrganizacion')
    

                        console.log("result = ", result.recordset[0].id)

 
        for(let i=0;i< p_param.length ; i++){
            
            console.log(p_param[i].idCliente)
           /* console.log(req.body[i].id)
            console.log(req.body[i].Precio)
            console.log(req.body[i].idMedida)
            console.log(req.body[i].Cantidad)
            console.log(req.body[i].subTotal)
            */ 
           /* se inserta el Nro pedido nuevo */
           p_param[i].idPedido = result.recordset[0].id
            
           // console.log(req.body[i].idPedido) 
           /** se inserta todos lo productos que van en el pedido */
          await new Pedido().Insertar_Pedido(p_param[i])
            }


     
            return result.recordset[0].id
    
    
           //res.json(result.recordset[0].id) /**retorno el resultado */

    
    }


    async Actualizar_CabeceraPedido (p_param)  {

      
     
    
        const pool = await getConnection();
            
        
        console.log(" p_param[0].idPedido = ")
        console.log(p_param[0].idPedido)
        console.log(p_param.length)
    
         
         const result =  await pool.request().input("idCabeceraPedido",sql.Numeric,p_param[0].idPedido)                            
                            .query('Eliminar_PedidoXIdcabecera @idCabeceraPedido')
        
    
                           // console.log("result = ", result.recordset[0].id)
    
     
            for(let i=0;i< p_param.length ; i++){
                
                console.log("Registro ")
                console.log(p_param[i].id)
               /* console.log(req.body[i].id)
                console.log(req.body[i].Precio)
                console.log(req.body[i].idMedida)
                console.log(req.body[i].Cantidad)
                console.log(req.body[i].subTotal)
                */ 
               /* se inserta el Nro pedido nuevo 
               p_param[i].idPedido = result.recordset[0].id
               */
                
               // console.log(req.body[i].idPedido) 
               /** se inserta todos lo productos que van en el pedido */
             await new Pedido().Insertar_Pedido(p_param[i])
                }
    
    
         
              //  return result.recordset[0].id
        
        
               //res.json(result.recordset[0].id) /**retorno el resultado */
    
        
        }




     async Insertar_Pedido  (p_param) {

      
        //const {id, nombre} =  req.body
        
        
        
        console.log("p_param = " , p_param)
        
        //console.log(req.body.idCliente)
        //console.log(req.body.id)
        console.log(p_param.Precio)
        //console.log(req.body.idMedida)
        //console.log(req.body.Cantidad)
        console.log("Insertar ---") 
         console.log("p_param.id = ",p_param.id) 
        
        
         const pool = await getConnection();
        await pool.request().input("idProducto",sql.Numeric,p_param.idProducto)
                            .input("cantidad",sql.Numeric,p_param.Cantidad) 
                            .input("idTipomedida",sql.Numeric,p_param.idMedida)
                            .input("idCliente",sql.Numeric,p_param.idCliente) 
                            .input("IdCabeceraPedido",sql.Numeric,p_param.idPedido)
                            .input("Comentario",sql.VarChar,p_param.Comentario) 
                            .query('Insertar_Pedido @idProducto , @cantidad , @idTipomedida , @idCliente , @IdCabeceraPedido , @Comentario')
        
        
            //res.json({id,nombre}) 
            
        
        }

 
    

}   

export default Pedido;