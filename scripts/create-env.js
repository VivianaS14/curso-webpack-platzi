const fs = require('fs');
/* Escribe el archivo .env dentro el servidor */
fs.writeFileSync('./.env', `API=${process.env.API}\n`);