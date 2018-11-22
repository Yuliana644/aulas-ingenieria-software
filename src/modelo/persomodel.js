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
var persona = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
persona.getStudents = function (callback)
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
persona.getStudent = function (id, callback)
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
persona.insertPer = function (reqData, callback)
{
    console.log(reqData)
    db.query("INSERT INTO personas(num_doc_pers, nom1_pers, nom2_pers, apll1_pers, apll2_pers, fec_nac_pers, correo_pers, direccio_pers, id_tipdoc, id_genero, password) VALUES(${num_doc_pers}, ${nom1_pers}, ${nom2_pers}, ${apll1_pers}, ${apll2_pers}, ${fec_nac_pers}, ${correo_pers}, ${direccion_pers}, ${id_tipdoc}, ${id_genero}, ${password})", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//actualizar un tipo de documento
persona.updateEst = function (reqData, callback)
 {
    db.query("UPDATE estudiantes SET nombre_contacto_emer=${nombre}, numero_contacto_emer=${num} WHERE pers_estudiante = ${id}", reqData)
    .then(function (data) {
        callback(null , {"msg": "success"})
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = persona;
