// mporta il modulo http core di Node.js 
import {createServer} from"node:http"
// Crea un server HTTP 
const server = createServer((request, response)=>{
   console.log(request, response)
// Imposta il codice di stato
   response.statusCode = 200
//  Imposta l'intestazione della risposta
   response.setHeader("Content-Type", "text/html")
//  Invia un corpo di risposta HTML
   response.end("<html><body><h1>This page was served with_Node.js</h1></body></html>")
})
// Fai in modo che il server ascolti la porta 3000
server.listen(3000, ()=> {
    console.log("Server running at http://localhost:3000")
})

