//ES8: import http from "./http"
let http = require("http")

http.createServer(function(peticion,respuesta){

let saludo = "hola la mundo desde <strong>Node.js<strong>!"

respuesta.setHeader("Content-Type", "text/html")

respuesta.write(saludo)

respuesta.end("usted quiere este recurso: " + peticion.url)
	
}).listen(2000)