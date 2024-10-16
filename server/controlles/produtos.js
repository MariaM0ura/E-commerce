import database from '../database.js';

export const getProdutos = (req, res) => {  
    const query = "SELECT * FROM Produtos";
    database.query(query, (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).json({ message: 'Erro ao consultar produtos' });
        }

        let produtos = Array.isArray(res) ? res : res.products;
        
        return res.status(200).json(result);
    });
};