const http = require('http');
const server = http.createServer((req, res) => {
  res.end("👋 Bonjour depuis Node.js + GitHub Actions !");
});
server.listen(3000, () => console.log("Serveur en écoute sur le port 3000")
);