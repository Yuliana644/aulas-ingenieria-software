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
    db.tx('my-transaction', t => {
      // t.ctx = transaction context object

      return t.one("INSERT INTO personas(num_doc_pers, nom1_pers, nom2_pers, apll1_pers, apll2_pers, fec_nac_pers, correo_pers, direccio_pers, id_tipdoc, id_genero, password) VALUES(${num_doc_pers}, ${nom1_pers}, ${nom2_pers}, ${apll1_pers}, ${apll2_pers}, ${fec_nac_pers}, ${correo_pers}, ${direccion_pers}, ${id_tipdoc}, ${id_genero}, ${password}) RETURNING id_persona", reqData)
          .then(user => {
              console.log(user)
              return t.batch([
                  t.none('INSERT INTO estudiantes(pers_estudiante) VALUES($1)', [user.id_persona]),
              ]);
          });
      })
      .then(data => {
        callback(null , {"msg": "success"})
      })
      .catch(error => {
        console.log("ERROR:", error);
      });
}

//---------------------------------------------------------------
//actualizar un tipo de documento
persona.updatePer = function (reqData, callback)
 {
  db.tx('my-transaction', t => {
    // t.ctx = transaction context object

    return  t.batch([
      t.none("UPDATE personas SET num_doc_pers = ${num_doc_pers}, nom1_pers = ${nom1_pers} , nom2_pers = ${nom2_pers}, apll1_pers = ${apll1_pers}, apll2_pers = ${apll2_pers}, fec_nac_pers = ${fec_nac_pers}, direccio_pers = ${direccio_pers}, id_tipdoc = ${id_tipdoc}, id_genero = ${id_genero} WHERE id_persona = ${id_persona}", reqData)
      ]);
    })
    .then(data => {
      callback(null , {"msg": "success"})
    })
    .catch(error => {
      console.log("ERROR:", error);
    });
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = persona;
