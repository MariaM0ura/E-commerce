// controlles/clientes.js
import database from '../database.js';
import jwt from 'jsonwebtoken';

export const authenticateClient = (req, res) => {
    const { email, senha } = req.body;

    const query = "SELECT * FROM Clientes WHERE email = ? AND senha = ?";
    database.query(query, [email, senha], (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).json({ message: 'Erro ao consultar clientes' });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        return res.status(200).json(result[0]); // Retorna os dados do cliente encontrado
    });
};


export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401); // Token não fornecido
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Token inválido
      req.user = user;
      next(); // Token válido, continuar
    });
  };

export const regsitrarClient = (req, res) => {
    const { id, nome, email, endereco, senha } = req.body;

    const query = "INSERT INTO Produtos (id, nome, email, endereco, senha) VALUES (?, ?, ?, ?, ?)";
    const values = [id, nome, email, endereco, senha];

    database.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).json({ message: 'Erro ao criar Cliente' });
        }

        return res.status(201).json({ message: 'Cliente criado com sucesso', produtoId: result.insertId });
    });
};
