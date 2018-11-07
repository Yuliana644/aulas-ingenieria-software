//obtenemos el modelo TipDocModel con toda la funcionalidad
var TipDocModel = require('../modelo/tipdocmodel');
var express = require('express');
//var router = express.Router();
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function ()
{

    //---------------------------------------------------------------
    //mostramos todos los tipos de documentos
    //Muestra el método CRUL Listar
    router.get("/", function (req, res)
    {

        //res.json(200,"LOL");
        TipDocModel.getTipDocs(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //obtiene un tipo de documento por su id
    //Muestra el método CRUL read(leer, mostrar, filtrar)
    router.get("/:id", function (req, res)
    {
        //id del usuario
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id))
        {
            TipDocModel.getTipDoc(id, function (error, data)
            {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else
                {
                    res.json(404, { "msg": "notExist" });
                }
            });
        }
        else //si hay algún error
        {
            res.json(500, { "msg": "Error" });
        }
    });

    //---------------------------------------------------------------
    //función que usa el verbo  post para insertar tipo de documento
    //Muestra y captura los datos del método CRUL crear
    router.post("/documentos", function (req, res)
    {
        //creamos un objeto con los datos del tipo de documento
        var TipDocData =
            {
                id_Tipo_documento: null,
                Tipo_Documento: req.body.Tipo_Documento,
                Ini_Documento: req.body.Ini_Documento,
            };


        //usamos la funcion para insertar
        TipDocModel.insertTipDoc(TipDocData, function (error, data)
        {
            //si el tipo de documento se ha insertado correctamente mostramos su info
            if (data && data.insertId)
            {
                res.redirect("/documentos/" + data.insertId);
            }
            else
            {
                res.json(500, { "msg": "Error" });
            }
        });
    });

    //---------------------------------------------------------------
    //función que usa el verbo  put para actualizar usuarios
    //Muestra y captura los datos para el método CRUL update (actualizar) 
    router.put("/documentos", function (req, res)
    {
        //almacenamos los datos de la petición en un objeto
        var TipFotoData =
            {
                id_documento: req.param('id_tip_doc'),
                Tipo_Documento: req.param('descripcion_tip_doc'),
                Ini_Documento: RegExp.param('ini_tip_doc'),
            };
        //usamos la funcion para actualizar
        TipDocModel.updateTipDoc(TipFotoData, function (error, data)
        {
            //si el tipo de documeto se ha actualizado correctamente mostramos un mensaje
            if (data && data.msg)
            {
                res.status(200).json(data);
            }
            else
            {
                res.json(500, { "msg": "Error" });
            }
        });
    });

   

    return router;
}
