/* 1. Explica en lenguaje natural cómo usarías git para añadir una funcionalidad
nueva.

1- Git lo usaria para facilitar el trabajo en equipo creando un repositorio y que varias personas
del equipo tenga permiso de modificarlo y asi poder trabajar todos en conjunto. Se crearian ramas 
nuevas de manera tal que no se pise el trabajo de los demas y al finalizar cada quien adjuntaria su
progreso a su rama y lo adjuntaria a la rama principal.

2. ¿Qué es un hotfix? ¿Cómo lo gestionarías en git?

2- Hotfix es una rama para corregir daños dentro del archivo y una vez corregidos se incorporan a la
rama master.
-Con este comando lo gestionaria en git
git checkout -b hotfix/x.y.z [commit-id]

3. Explica brevemente el patrón MVC

3- M = Modelo: define la estructura de los datos y es donde se encuntra la logica del negocio. Si
algo se modifica esto se le notificara a la Vista = V : que es donde se define como se mostraran los
datos de la aplicacion y por ultimo el Controlador = C : conjunto de funciones que se conectan con
los modelos y las vistas.

4. ¿Qué es una API? Pon un ejemplo de petición de datos a una API desde PHP o
Javascript.

Una API son interfaces para que una aplicacion pueda interactuar con otra y aprovechar sus
funcionalidades.

Aqui debajo les muestro un ejemplo tratandon una API de rick&morty en la cual returnamos un array de objetos*/
 const url = "https://rickandmortyapi.com/api/character/?page=1"

 async function peticion() {
    const character = await fetch(url);
    const result = await character.json();
    console.log(result);
  }
  peticion(url)

/* 5. ¿Qué es Vue? ¿Qué relación tiene con javascript? ¿Qué es un componente de
Vue? 

5. Como tal no tengo conocimientos programando con Vue pero se que es un framework de Javascript y 
se asemeja mucho a la forma de tratar con React. Un componente de Vue es un componente creado para
poder reutilizarlo dentro de otro componente o pagina de la pagina.

6. ¿Qué hace el siguiente código? Se lanza dentro de un método de un
componente.*/
var self = this;
axios.post(webapi_url + '/budgets', budget)
.then(response =>{
    self.reloadData()
})
.catch( err => {
    alertator.show(dictionary.error_budget);
    console.log.error(err)
})
/*Se realiza una llamada a la api con el endpoint budgets y devuelve el objeto "this"
y recarga los datos y en caso tal de error imprime por consola el error de budget

7. Desarrolla con HTML y CSS el header de la web https://thewhiteplanner.com

7- Respuesta en el index.html conectado con index.css

8. ¿Prefieres flat style o nested? Justifica (lo posible) tu respuesta.

8-Me gusta mas flat style por la facilidad que te da a leer el codigo. Si es verdad que depende del
contexto donde se trabaje el codigo va a ser mas sencillo leerlo es decir que a veces no es malo usar
nested style.

*/




