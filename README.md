<h1 align="center"> fetchJS </h1>

Es una función que se encargará de importar el contenido de un archivo que tenga datos en formato JSON pero con extensión _'.js'_, está basado en _'fetch'_ ya que devuelve una promesa con el contenido y se resuelve al cabo del tiempo que se le indica. La idea de este proyecto es poder practicar fuera de linea la forma en la que se reciba un JSON a través de promesas o usando la sintaxis de asinc/await.

- - -

### 📝 Pre-Requisitos ###

  * [Git](https://git-scm.com/) Lo usaremos para clonar el repositorio.

- - -

### 🔧 Instalación ### 

Diríjase al proyecto en que desea implementarlo, abra su terminal y realice un:

``` sh
git clone 'https://github.com/OWLjz18/fetchJS.git'
```

- - -

### 🔎 Uso ###

#### Sintaxis: ####
``` javascript
fetchJS(ruta [, tiempo, error]);
```

  * ruta => Es la ruta relativa del archivo que contiene la información a importar.
  * tiempo? => Es el tiempo que se tardará la función en retornar el contenido importado del archivo. Este parámetro es opcional y de no establecerse, _"fetchJS"_ se resolverá inmediatamente.
  * error? => Este parámetro opcional indica si se lanzará un error o no, por defecto viene establecido en **false**, si lo establece en **true**, se arrojará un error. La funcionalidad de este parámetro es permitirle a usted prácticar el manejo de errores.

#### Métodos: ####

Para manejar el objeto _respuesta_ que retorna la promesa (así cómo el fetch original cuenta con métodos cómo **json, text, blob, etc.**) fetchJS cuenta con dos métodos: 

  * **respuesta.text()** => Lee y devuelve el contenido del archivo importado en formato de texto.
  * **respuesta.json()** => Lee y devuelve el contenido del archivo importado parseado a formato _JSON_.

Para que fetchJS funcione correctamente, el archivo que importaremos debe tener una estructura un tanto específica, que será la siguiente:

``` javascript
export default 
`{
  // Aquí sus datos en formato JSON...
}`
```

**_NOTA_**: No necesariamente sus datos deben estar dentro de las llaves, ya que al ser formato _JSON_, usted perfectamente puede tener un array de objetos (o lo que desee), cuándo digo que la estructura debe ser esa, me refiero a que debe tener el **export default** y sus datos deben estar dentro de las comillas invertidas (**``**).

#### Ejemplo: ####

Veamos ejemplo, creemos un archivo llamado _'code.js'_ en la raíz de nuestro proyecto y en él usaremos a _'fetchJS'_, así que hagamos la importación:

``` javascript
import fetchJS from './fetchJS/src/fetchjs.js';
```

Dentro de la carpeta _"src"_ además del archivo **_fetchjs.js_**  encontraremos uno llamado **_fetchjs_ejemplo.js_** que puede usar para prácticar, así que en este ejemplo, usaremos ese archivo. (Usted muy perfectamente puede escribir su propio archivo)

Continuemos con el ejemplo. Vayamos a nuestro archivo _"code.js"_ y ya que importamos la función de _"fetchJS"_, démosle uso:

``` javascript
import fetchJS from './fetchJS/src/fetchjs.js';

fetchJS('./fetchJS/src/fetchjs_ejemplo.js', 2000)
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
  .catch(err => console.warn(err));
```

Ejecutelo y vea el resultado :D

**_NOTA:_** Para el ejemplo usamos promesas, pero usted puede usar la sintaxis de async/await si así lo desea.

- - - 

### 🦉 Autor ###

  * *__José Zambrano__* ([OWLjz18](https://github.com/OWLjz18)) => Creador del proyecto.
    * Correo electrónico => <owl.jz18@gmail.com>

- - -

### 🤝 Apoyo ###

Si te gusta el proyecto puedes comentarle a otros sobre él y regalarnos una 🌟.

- - -

### 📃 Licencia ###

Este proyecto esta bajo una licencia MIT, visite el archivo [LICENSE.md](./LICENSE.md) para obtener mas información al respecto.
