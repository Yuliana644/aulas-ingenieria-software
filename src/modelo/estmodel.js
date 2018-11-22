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
var estudiantes = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
estudiantes.getStudents = function (callback)
{
    db.query("SELECT $1:name FROM $2:name", ['*', 'estudiantes'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
estudiantes.getStudent = function (id, callback)
{
    db.query("SELECT $1:name FROM $2:name WHERE pers_estudiante = "+id, ['*', 'estudiantes'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//añadir un nuevo tipo de documento
estudiantes.insertEst = function (reqData, callback)
{
    db.none("INSERT INTO estudiantes(pers_estudiante, nombre_contacto_emer, numero_contacto_emer) VALUES(${id}, ${nombre}, ${num})", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//actualizar un tipo de documento
estudiantes.updateEst = function (reqData, callback)
 {
    db.none("UPDATE estudiantes SET nombre_contacto_emer=${nombre}, numero_contacto_emer=${num} WHERE pers_estudiante = ${id}", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = estudiantes;
