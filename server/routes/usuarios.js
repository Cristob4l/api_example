
const express = require('express');
const { json } = require('body-parser');

const app  =  express();
var usuarios = [{name:"Claudio Diaz",ocupation:"Estudiante",id:"1"},
                {name:"Erwin Fischer",ocupation:"Profesor",id: "2"},
                {name:"Juan Cares",ocupation:"Estudiante",id:"3"},
                {name:"Felipe Ramirez",ocupation:"Estudiante",id:"4"},];


// retorna usuario especifico.
app.get('/usuarios/:id', function (req, res) {
    var id = req.params.id;
    res.send(usuarios[id-1]);
});
//retorna todos los usuarios.
app.get('/', function (req, res) {
    res.send(usuarios);
  });
// agrega un usuario | escribir parametros en postman en el siguiente orden: name, ocupation y id.s
app.put('/usuarios',function (req,res ){
    
    let body = req.body; 
    usuarios.push(body);
    res.send(body)
})

module.exports = app;