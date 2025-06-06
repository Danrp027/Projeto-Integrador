const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../database/banco.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Banco conectado com sucesso!');
    //criarTabelas();
  }
});



module.exports = db;