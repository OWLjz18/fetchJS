/**
 * @author OWLjz18 <owl.jz18@gmail.com>
 * @version 1.0.2
 * @license MIT > https://github.com/OWLjz18/fetchJS/blob/main/LICENSE.md
*/

/**
 * Se encarga de importar el contenido de un archivo que tenga datos en formato JSON pero con extensión '.js', está basado en 'fetch' ya que devuelve una promesa con el contenido y se resuelve al cabo del tiempo que se le indica. La idea de este proyecto es poder practicar fuera de linea la forma en la que se reciba un JSON a través de promesas o usando la sintaxis de asinc/await. Si gusta puede echarle un vistazo al archivo README.md para visualizar su uso mediante ejemplos y así ver la estructura que debe llevar el archivo a importar.
 * @param {String} ruta - Es la ruta relativa del archivo que contiene la información a importar.
 * @param {Number} [tiempo=0] - Es lo que se tardará la función en retornar el contenido del archivo leído.
 * @param {Boolean} [error=false] - Este argumento indica si se rechaza o no la operación, por defecto su valor es 'false', si se establece en 'true' sera rechazada la operación, sirve para practicar el manejo de errores.
 * @returns {Promise<{}>}
*/
export default async function(ruta, tiempo = 0, error = false) {
  
  const fetchJSError = class extends Error {
    
    constructor(message) {
      super(`Error al ejecutar "fetchJS": ${message}`); 
      this.name = this.constructor.name;
    }
    
  };
  
  const url = new URL(ruta, window.location.href).href;
  
  try {
    
    const modulo = await import(url);
    
    const respuesta = {
      /**
       * Retorna una promesa con el contenido del modulo en formato de texto.
       * @type {Function}
       * @returns {Promise<String>}
      */
      text() {
        return Promise.resolve(modulo.default);
      }, 
      /**
       * Retorna una promesa con el contenido del modulo en formato JSON.
       * @type {Function}
       * @returns {Promise<{}>}
      */
      json() {
        try {
          
          return Promise.resolve(JSON.parse(modulo.default));
          
        } catch (err) {
          
          throw new fetchJSError(`No se puede parsear el contenido del modulo a JSON. => ${err.message}`);
          
        }
      }
    };  
    
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        
        if (!error) {
          
          resolve(respuesta);
          
        } 
        
        reject(new fetchJSError(`Haz establecido "error" en => ${error}.`));
        
      }, tiempo);
      
    });
    
  } catch (err) {
    
    if (err instanceof TypeError) {
      
      throw new fetchJSError(`No se puede importar el contenido del archivo, por favor revise que la ruta sea la correcta. => ${url}`);
      
    } else {
      
      throw err;
      
    }
    
  }

};
