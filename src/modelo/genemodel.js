//llamamos al paquete mysql que hemos instalado
var pgp = require("pg-promise")(/*options*/);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'aulas_virtuales',
    user: 'yuliana',
    password: 'y644575'
};

const db = pgp(cn);

//creamos un objeto para ir almacenandotodo lo que necesitemos
var generos = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
generos.getGeneros = function (callback) 
{
    db.query("SELECT $1:name FROM $2:name", ['*', 'generos'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
generos.getGeneros = function (id, callback) 
{
    db.query("SELECT $1:name FROM $2:name WHERE id_genero = "+id, ['*', 'generos'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//añadir un nuevo tipo de documento
generos.insertGen = function (reqData, callback) 
{
    db.none("INSERT INTO generos(descrip_genero) VALUES( ${descgen})", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//actualizar un tipo de documento
estudiantes.updateGen = function (reqData, callback)
 {
    db.none("UPDATE generos SET descrip_genero=${descgen}, WHERE id_genero = ${id}", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = generos;
