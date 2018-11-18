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
var TipDocModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipDocModel.getTipDocs = function (callback) 
{
    db.query("SELECT $1:name FROM $2:name", ['*', 'tipos_documentos'])
    .then(function (data) {
        callback(null , data)
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
TipDocModel.getTipDoc = function (id, callback) 
{
    if (connection) 
    {
        var sql = 'SELECT id_tip_doc, descripcion_tip_doc, ini_tip_doc FROM tips_docs WHERE id_tip_doc = ' 
                    + connection.escape(id);

        connection.query(sql, function (error, row) 
        {
            if (error) 
            {
                throw error;
            }
            else 
            {
                callback(null, row);
            }
        });
    }
}

//---------------------------------------------------------------
//añadir un nuevo tipo de documento
TipDocModel.insertTipDoc = function (TipDocData, callback) 
{
    if (connection) 
    {
        connection.query('INSERT INTO tips_docs SET ?', TipDocData, function (error, result) 
        {
            if (error) 
            {
                throw error;
            }
            else
            {
                //devolvemos la última id insertada
                callback(null, {"insertId": result.insertId});
            }
        });
    }
}

//---------------------------------------------------------------
//actualizar un tipo de documento
TipDocModel.updateTipDoc = function (TipDocData, callback)
 {

    if (connection) 
    {
        var sql = 'UPDATE tips_docs SET descripcion_tip_doc = ' + connection.escape(TipDocData.descripcion_tip_doc) 
                    + ', ini_tip_doc = ' + connection.escape(TipDocData.ini_tip_doc)  
                    + 'WHERE id_tip_doc = ' + TipDocData.id_documento;
                    
        console.log(sql);
        connection.query(sql, function (error, result) 
        {
            if (error) 
            {
                throw error;
            }
            else 
            {
                callback(null, {"msg": "success"});
            }
        });
    }
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = TipDocModel;
