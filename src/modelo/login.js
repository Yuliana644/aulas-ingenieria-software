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
var login = {};

//---------------------------------------------------------------
//actualizar un tipo de documento
login.loginEstudent = function (reqData, callback)
 {
    db.any("SELECT * FROM personas WHERE correo_pers = ${email} AND password = ${pass}", reqData)
    .then(function (data) {
      console.log(data)
      callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}


module.exports = login;
