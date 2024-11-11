import sql from 'mssql'



const dbSettings = {
  user: 'delivery',
  password: 'madg043007',
  server: '173.248.151.67,1533',    
  database: 'delivery',
  options:{
       encrypt: false,
       trusServerCertificate: true,
  },
}

export async function getConnection() {
  try{
    const pool = await sql.connect('Server='   + dbSettings.server  + 
                                  ';Database=' + dbSettings.database +
                                  ';User Id='  + dbSettings.user +
                                  ';Password=' + dbSettings.password +
                                  ';Encrypt='  + dbSettings.options.encrypt + '') 

    return pool; /**retorno la conexion */
    
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