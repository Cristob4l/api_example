
const express = require('express');

const app  =  express();
var usuarios = [{name:"Claudio Diaz",ocupation:"Estudiante",id:"1"},
                {name:"Erwin Fisher",ocupation:"Profesor",id: "2"}];


// retorna usuario especifico.
app.get('/usuarios/:id', function (req, res) {
    var id = req.params.id;
    res.send(usuarios[id-1]);
});
//retorna todos los usuarios.
app.get('/usuarios', function (req, res) {
    res.send(usuarios);
  });
// agrega un usuario.
app.put('/usuarios',function (req,res ){
    
    let body = req.body;
    usuarios.push(body);
    res.send(body)
})

module.exports = app;