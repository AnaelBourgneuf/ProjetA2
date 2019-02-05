//var exampleSocket; 
  
//*** function connect(){ 
  //  exampleSocket = new WebSocket("ws://site_url:8765"); 
    //exampleSocket.onopen = function (event) { console.log("/!\\ Connexion serveur"); } 
    // exampleSocket.onerror = function (event) { console.log(event); } 
    // exampleSocket.onmessage = function (event) { console.log(event.data); } 
    // exampleSocket.onclose = function (event) { console.log("/!\\ Déconnexion serveur"); } 
// */}

var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'application/json'});

  res.end(JSON.stringify({message:"Mon premier serveur Node.js !!!"}));

}).listen(8080);

console.log('Le serveur est accessible ici : http://localhost:8080/');