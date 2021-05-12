const express = require('express')
const {uuid} = require('uuidv4')
const path = require('path')
const multer = require('multer')
const app = express();
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const ejs = require('ejs')
const fs = require('fs')

//Credenciais do aws
aws.config.update({
    accessKeyId: '<seuID>',
    secretAccessKey: '<suaChveScecreta>',
    region:'<suaRegiao>'
})

//Configuraçao do ejs, para vizualizar o front-end
app.set('view engine', 'ejs')

//Instância do bucket
const s3 = new aws.S3(); 

//Configuraçao do Multer com o S3
const upload = multer({
    storage: multerS3({
        s3, //instância
        bucket: 'meli-project-rafael/arquivos-utilitarios', //diretorio da pasta no bucket
        acl: 'public-read', //acesso ao bucket
        key(req, file, callback){//nome do arquivo
            callback(null, uuid() + "-" + file.originalname) //gera caractéres aleatórios antes do nome original do arquivo
        } 
    })
})

//Rota principal
app.post('/file', upload.any('arq'), (req,res)=>{ //upload.any() envio de diversos arquivos
    console.log("ok");
    res.redirect('/sucesso')

})

//Rota do formulario front end
app.get('/', (req, res) =>{
    res.render("upload") //renderiza o formulário upload na rota /upload
})

app.get('/sucesso', (req, res) =>{
    res.render("sucesso") //renderiza o formulário sucesso na rota /sucesso
})



app.listen(3333);

