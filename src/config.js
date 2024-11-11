import{config} from 'dotenv'
config();
/**obtengo variables de entorno que se guarda en en el archivo .env, que se pone en la raiz */
console.log(process.env.PORT)

export default {
   /** si la variable de entorno no esta se da un valor por defecto */
  port: process.env.PORT || 4444,

}