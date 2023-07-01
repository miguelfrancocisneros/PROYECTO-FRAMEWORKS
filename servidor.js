const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MAX_DIRECTORES = 25; // maximo número de respuestas de base de datos
const MAX_PELICULAS  = 10;

require('dotenv').config();
const USUARIO  = process.env.USUARIO_BD;
const CLAVE    = process.env.CLAVE_BD;
const SERVIDOR = process.env.SERVIDOR_BD;
const PUERTO   = process.env.PORT || 3000;

console.log("USUARIO", USUARIO);
console.log("CLAVE", CLAVE);
console.log("SERVIDOR", SERVIDOR);
console.log("PUERTO", PUERTO);
 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + USUARIO + ":" + CLAVE + "@" + SERVIDOR + "?retryWrites=true&w=majority";

// Creación del cliente mongoDB con opciones.
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Ruta y query para la búsqueda de directores: /directores?nombre_incompleto=...
app.get('/directores', async (req, res)=> {
  console.log("URL:", req.url, "Query: ", req.query)
  let results   = await getDirectores(client, req.query.nombre_incompleto);
  res.json( { directores: results.dirs } ); 
})

// Ruta y query para la búsqueda de películas de un director
app.get('/peliculas', async (req, res) => {
  console.log("URL:", req.url, "Query: ", req.query)
  let peliculas = await getPeliculas(client, req.query.director);
  console.log("peliculas de ", req.query.director, ": ", peliculas)
  res.json( { pelis: peliculas } );
})

// servicio estático desde public 
app.use('/', fileServerMiddleware);   


app.listen(PUERTO, function () {
  console.log('App escuchando en el puerto', PUERTO);
});



// Funciones de peticion de info a MongoDB



// getDirectores:
// - client: cliente MongoDB
// - regexp_nombre: expresión regular para búsqueda de director en forma de regex /<regexp_nombre>/i
async function getDirectores(client, regexp_nombre) {

  const re = new RegExp(`${regexp_nombre}`, "i"); //  exp. reg.  /<regexp_nombre>/i
  console.log("expresión regular: ", re);
  
  let resultados = await client.connect().then( (conexion) => {
            return conexion.db("sample_mflix")
                        .collection("movies")
                        .find({ directors: {$elemMatch: {$regex: re}}})
                        .project({_id:0, directors:1})
                        .toArray();
          });
  let directores=[];
  resultados.forEach( (peli) => { 
          peli.directors.forEach( (dir) => { 
              // como directores es un array, se pasa el "test" a todos los elementos del 
              // mismo y solo se añade, directores.push(dir), si cumple con la expresión regular 
              // del nombre: re.test(dir), siempre y cuando no esté incluido ya: !directores.includes(dir)
              if ( re.test(dir) && !directores.includes(dir)) {
                directores.push(dir);       
              }
            }); 
        }); 

  console.log("resultados: directores ("+directores.length+"), regex: ["+regexp_nombre+"]: ", directores);      
  const res = { dirs: directores.sort().slice(0,MAX_DIRECTORES)}      
  console.log("resultados: dirs ("+res.dirs.length+"), regex: ["+regexp_nombre+"]: ", res);
  return res;

}


/************************************************************ */
// Devuelve las películas de cierto director
// - cliente: cliente MongoDB
// - director: nombre  del director
async function getPeliculas(client, director) {
  const re2 = new RegExp(director,"i");
  return await client.connect().then( async (conexion)=>{
      return await conexion.db("sample_mflix")
                .collection("movies").find({ directors: {$elemMatch: {$regex: re2}}})
                .project({_id:0, title:1, poster:1, fullplot:1, imdb:1, genres:1})
                .limit(MAX_PELICULAS)
                .toArray();
    })
}
/************************************************************* */



