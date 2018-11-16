//obtenemos el modelo TipDocModel con toda la funcionalidad
var cursosModel = require('../modelo/cursosmodel');
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
        cursosModel.getCursos(function (error, data)
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
            cursosModel.getStudent(id, function (error, data)
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
    router.post("/", function (req, res)
    {
        //creamos un objeto con los datos del tipo de documento
        var reqData =
            {
                id: req.body.pers_estudiante,
                nombre: req.body.nombre_contacto_emer,
                num: req.body.numero_contacto_emer,
            };


        //usamos la funcion para insertar
        cursosModel.insertEst(reqData, function (error, data)
        {
            //si el tipo de documento se ha insertado correctamente mostramos su info
            if (data.msg=="success")
            {
                // res.redirect("/documentos/" + data.insertId);
                res.json(200, { "msg": "Saved SUCCESS" });
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
    router.put("/", function (req, res)
    {
        //almacenamos los datos de la petición en un objeto
        var reqData =
        {
            id: req.body.pers_estudiante,
            nombre: req.body.nombre_contacto_emer,
            num: req.body.numero_contacto_emer,
        };
        //usamos la funcion para actualizar
        cursosModel.updateEst(reqData, function (error, data)
        {
            //si el tipo de documeto se ha actualizado correctamente mostramos un mensaje
            if (data.msg=="success")
            {
                // res.redirect("/documentos/" + data.insertId);
                res.json(200, { "msg": "Saved SUCCESS" });
            }
            else
            {
                res.json(500, { "msg": "Error" });
            }
        });
    });

    return router;
}
