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
var notas = {};

//---------------------------------------------------------------
//obtenemos todas las notas
notas.getNotas = function (callback) 
{
    db.query("SELECT $1:name FROM $2:name", ['*', 'notas'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

}

//---------------------------------------------------------------
//obtenemos una nota
notas.getNotas = function (id, callback) 
{
    db.query("SELECT $1:name FROM $2:name WHERE id_nota = "+id, ['*', 'notas'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//añadir un nueva nota
notas.insertNota = function (reqData, callback) 
{
    db.none("INSERT INTO notas(nota, id_estudiante_nota, id_tema_nota) VALUES(${nota}, ${estud}, ${tema})", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//actualizar una nota
notas.updateNota = function (reqData, callback)
 {
    db.none("UPDATE notas SET nota=${nota}, id_estudiante_nota=${estud}, id_tema_nota={tema} WHERE id_notas = ${id}", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = notas;
