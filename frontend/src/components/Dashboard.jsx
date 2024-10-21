import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [produtos, setProdutos] = useState([]);
    const [maisVendido, setMaisVendido] = useState(null);
    const [totalGanho, setTotalGanho] = useState(0); // Estado para armazenar o total ganho

    const carregarProdutos = async () => {
        try {
            const response = await axios.get("http://localhost:8800/dashabord"); // Endpoint para carregar produtos
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao carregar os produtos", error);
        }
    };

    const carregarMaisVendido = async () => {
        try {
            const response = await axios.get("http://localhost:8800/produto-mais-vendido");
            setMaisVendido(response.data);
            console.log('Produto mais vendido:', response.data);
        } catch (error) {
            console.error("Erro ao carregar o produto mais vendido", error);
        }
    };

    useEffect(() => {
        carregarProdutos();
        carregarMaisVendido();
    }, []); // Executa apenas uma vez quando o componente é montado

    // useEffect para calcular o total ganho quando os produtos mudam
    useEffect(() => {
        const ganho = produtos.reduce((acc, produto) => {
            const totalVendido = produto.total_vendido ? parseInt(produto.total_vendido) : 0;
            return acc + (produto.preco * totalVendido);
        }, 0);
        setTotalGanho(ganho);
    }, [produtos]); // Executa sempre que produtos mudam

    return (
        <div className="product-detail-container-dashboard">
            <h1>Dashboard</h1>
            <section>
                <h2>Total Earned: R$ {totalGanho.toFixed(2)}</h2> {/* Exibir total ganho */}
                <h2>Products</h2>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Total Sold</th> {/* Adicionei coluna para total vendido */}
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R$ {produto.preco.toFixed(2)}</td> {/* Exibir preço formatado */}
                                <td>{produto.total_vendido !== null ? produto.total_vendido : 'No Sales'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Best Selling Product</h2>
                {maisVendido ? (
                    <div className="best-selling-product">
                        <p><strong>Name:</strong> {maisVendido.nome}</p>
                        <p><strong>Total Sold:</strong> {maisVendido.total_vendido}</p>
                    </div>
                ) : (
                    <p>No products sold yet</p>
                )}
            </section>
        </div>

    );
};

export default Dashboard;
