//obtenemos el modelo TipDocModel con toda la funcionalidad
var LoginModel = require('../modelo/login');
var express = require('express');
//var router = express.Router();
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function ()
{

    //---------------------------------------------------------------
    //función que usa el verbo  post para insertar tipo de documento
    //Muestra y captura los datos del método CRUL crear
    router.post("/", function (req, res)
    {
        //creamos un objeto con los datos del tipo de documento
        console.log(req)
        var reqData =
            {
                email: req.body.loginEmail,
                pass: req.body.loginPass,
                //num: req.body.numero_contacto_emer,
            };


        //usamos la funcion para insertar
        LoginModel.loginEstudent(reqData, function (error, data)
        {
            //si el tipo de documento se ha insertado correctamente mostramos su info
            if (data.length > 0)
            {
                // res.redirect("/documentos/" + data.insertId);
                res.status(200).json({status:200, msg: data });
            }
            else
            {
                res.json(500, { "msg": "Error" });
            }
        });
    });


    return router;
}
