var express = require('express');//guarda express que nosotros intalamos
//var cookieParser = require('cookie-parser');//trabajar las galletas
var bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto
var tipdoc = require('./src/rutas/tipdocruta');//rutaExaminar
var estudiantes = require('./src/rutas/estruta');//ruta
var personas = require('./src/rutas/persoruta');//ruta yulia
var generos=require('./src/rutas/generuta');//Ruta generos
var notas=require('./src/rutas/notasruta');//Ruta Notas
var http = require('http');//protocolo de intercambio de archivos
var path = require('path');//direccion

var app = express();//recibe un constructor

// todos los entornos
app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso

app.use(bodyParser.json({type: 'application/json', limit: '10mb'}));//recibe un cuerpo y un objeto json
app.use(bodyParser.urlencoded({extended: false}));//recibe url codificada
//app.use(cookieParser());//maneja galletas
app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//======================================================================

app.use(function (req, res, next) 
{

    // Stio web al que desea permitir que se conecte
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
    // A que métodos que desea dar permisos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // A que  encabezados se les va a dar permiso
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    //Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
    //a la API (por ejemplo, en caso de que use sesiones)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pase a la siguiente capa de middleware
    next();
  });
  
  //============================================================


app.use('/estudiantes', estudiantes());//ruta para el servicio
app.use('/cursos', tipdoc());//ruta para el servicio
app.use('/personas', personas());//ruta para el servicio /yuliana
app.use('/generos', generos());
app.use('/notas',notas());
//app.use('/documentos',Conectar())


http.createServer(app).listen(app.get('port'), function () 
{
    console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;

