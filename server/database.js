import mysql from 'mysql2'; // Alterado para mysql2

export const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Altere conforme sua senha
    database: 'ecommerce' // Verifique se o nome do banco de dados está correto
});

// Conectar ao banco de dados
database.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

export default database;