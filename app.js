const http = require('http');
const server = http.createServer((req, res) => {
  res.end("J'ai modifié le message");
});
server.listen(3000, () => console.log("Serveur en écoute sur le port 3000")
);
//Comment