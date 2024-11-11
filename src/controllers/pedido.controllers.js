
/**importo la funcion get conexion desde conection.js */
import {getConnection,sql} from '../database/conection.js'


export const Listar_Cabecerapedido = async (req,res)=> {


     
    console.log("resultado 1 =" +  req)
    console.log("resultado =" +  req.data)

    
     
    const pool = await getConnection();
    
    const result = await pool.request().input("idCliente",sql.Numeric,req.body.idCliente)
                             .query('Listar_Cabecerapedido @idCliente')
    console.log(result)
    res.json(result.recordset) /**retorno el resultado */


}

 


export const Listar_detallePedido = async (req,res)=> {
     
    const pool = await getConnection();
    
    const result = await pool.request().input("nropedido",sql.Numeric,req.body.nropedido)
                             .query('Listar_detallePedido @nropedido')
    console.log(result)
    res.json(result.recordset) /**retorno el resultado */


}

 





export const Insertar_CabeceraPedido =  async (req,res)=> {

      
    //const {id, nombre} =  req.body
    
    const pool = await getConnection();
        
    

  //console.log(req.body.idCliente)

    
    const result =  await pool.request().input("idCliente",sql.Numeric,req.body[0].idCliente)
                        .input("idOrganizacion",1)                        
                        .query('Insertar_CabeceraPedido @idCliente , @idOrganizacion')
    

                        console.log("result = ", result.recordset[0].id)


        for(let i=0;i< req.body.length ; i++){
           /*
            console.log(req.body[i].idCliente)
            console.log(req.body[i].id)
            console.log(req.body[i].Precio)
            console.log(req.body[i].idMedida)
            console.log(req.body[i].Cantidad)
            console.log(req.body[i].subTotal)
            */ 
           /* se inserta el Nro pedido nuevo */
            req.body[i].idPedido = result.recordset[0].id
            
           // console.log(req.body[i].idPedido) 
           /** se inserta todos lo productos que van en el pedido */
           Insertar_Pedido(req.body[i],res)
            }


     
        
    
    
           res.json(result.recordset[0].id) /**retorno el resultado */

    
    }




export const Insertar_Pedido =  async (req,res)=> {

      
//const {id, nombre} =  req.body



console.log("req = " , req)

//console.log(req.body.idCliente)
//console.log(req.body.id)
console.log(req.Precio)
//console.log(req.body.idMedida)
//console.log(req.body.Cantidad)
console.log(req.subTotal) 
 console.log("Comentario = ",req.Comentario) 


 const pool = await getConnection();
await pool.request().input("idProducto",sql.Numeric,req.id)
                    .input("cantidad",sql.Numeric,req.Cantidad) 
                    .input("idTipomedida",sql.Numeric,req.idMedida)
                    .input("idCliente",sql.Numeric,req.idCliente) 
                    .input("IdCabeceraPedido",sql.Numeric,req.idPedido)
                    .input("Comentario",sql.VarChar,req.Comentario) 
                    .query('Insertar_Pedido @idProducto , @cantidad , @idTipomedida , @idCliente , @IdCabeceraPedido , @Comentario')


    //res.json({id,nombre}) 
    

}

export const Actualizar_EstadoCabecerapedido =  async (req,res)=> {

      
    //const {id, nombre} =  req.body
    
    const pool = await getConnection();
    
    await pool.request().input("id",sql.Numeric,req.body.id)
                        .input("idEstadoPedido",sql.Numeric,req.body.idEstadoPedido)
                        .query('Actualizar_EstadoCabecerapedido @id , @idEstadoPedido ')
    
    
        //res.json({id,nombre}) 
        
    
    }

    

    