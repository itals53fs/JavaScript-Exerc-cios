const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(body_parser.urlencoded({extended:false}));
app.use(cors());
const carros ={
    modelo: []
};
app.get('/', function (req, resp) { // raiz teste do sevidor
    resp.send(carros);
})
app.get('/company', function(req, res){
    res.json(read_json('company.json'));
})
app.post('/dadosCarros', function(req, res){
    let url= req.body.url;
    let marca = req.body.marca;
    let ano= req.body.ano;
    let placa= req.body.placa;
    let cor= req.body.cor;
    carros.modelo.push({
        url:url,
        marca:marca,
        ano:ano,
        placa:placa,
        cor:cor
    })
    
    //write_json('carros.json', carros)
})
console.log(carros)
function write_json(name, conteudo){
    fs.writeFile(name, JSON.stringify(conteudo, null, 2));
}
function read_json(caminho){
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(conteudo)
}
app.listen(3000);