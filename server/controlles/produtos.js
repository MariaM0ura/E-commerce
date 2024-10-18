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

export const createProduto = (req, res) => {
    const { nome, descricao, preco, estoque, imagem } = req.body;

    const query = "INSERT INTO Produtos (nome, descricao, preco, estoque, imagem) VALUES (?, ?, ?, ?, ?)";
    const values = [nome, descricao, preco, estoque, imagem];

    database.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).json({ message: 'Erro ao adicionar produto' });
        }

        return res.status(201).json({ message: 'Produto adicionado com sucesso', produtoId: result.insertId });
    });
};

export const getProdutoById = (req, res) => {
    const { id } = req.params;
    
    const query = "SELECT * FROM Produtos WHERE id = ?";
    database.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).json({ message: 'Erro ao buscar produto' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        return res.status(200).json(result[0]);
    });
};