import sql from 'pg'

const { Client } = require('pg') 



const dbSettings = {
  user: 'catalogo_sistemas',
  password: 'cs.24@efe.cl',
  host: '172.30.100.201',    
  database: 'postgres',
  port: '5433',
  /*options:{
       encrypt: false,
       trusServerCertificate: true,
  },*/
}

export async function getConnection() {
  try{

    //const pool = await  sql.connect(dbSettings)
    const connect = new Client(dbSettings)
    /*
    const pool = await sql.connect('Server='   + dbSettings.server  + 
                                  ';Database=' + dbSettings.database +
                                  ';User Id='  + dbSettings.user +
                                  ';Password=' + dbSettings.password +
                                  ';Encrypt='  + dbSettings.options.encrypt + '') 
    */
    return connect; /**retorno la conexion */
    
  }catch(error){
    console.error(error)
  }
    /**ejemplo d eprobar la conexion */                           
  // const result = await pool.request().query('select * from productos');
  // console.log(result);
}
/** llamo para saber si se conecta y da un resultado */

/**ejemplo de porbar la conexion al cargar el programa */
//getConnection();
export {sql}