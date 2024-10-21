import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [produtos, setProdutos] = useState([]);
    const [maisVendido, setMaisVendido] = useState(null);

    // Função para carregar os dados dos produtos
    const carregarProdutos = async () => {
        try {
            const response = await axios.get("http://localhost:8800");
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao carregar os produtos", error);
        }
    };

    // Função para carregar o produto mais vendido
    const carregarMaisVendido = async () => {
        try {
            const response = await axios.get("http://localhost:8800");
            setMaisVendido(response.data);
        } catch (error) {
            console.error("Erro ao carregar o produto mais vendido", error);
        }
    };

    // Carregar os dados assim que o componente montar
    useEffect(() => {
        carregarProdutos();
        carregarMaisVendido();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <section>
                <h2>Produtos</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Imagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>R$ {produto.preco}</td>
                                <td>{produto.estoque}</td>
                                <td>
                                    <img src={produto.image} alt={produto.nome} width="50" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Produto Mais Vendido</h2>
                {maisVendido ? (
                    <div>
                        <p><strong>Nome:</strong> {maisVendido.nome}</p>
                        <p><strong>Descrição:</strong> {maisVendido.descricao}</p>
                        <p><strong>Total Vendido:</strong> {maisVendido.total_vendido}</p>
                    </div>
                ) : (
                    <p>Nenhum produto vendido ainda</p>
                )}
            </section>
        </div>
    );
};

export default Dashboard;
