import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import GlobalStyle from '../styles/globals';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = email === "" ? "O e-mail é obrigatório" : "";
    tempErrors.senha = senha === "" ? "A senha é obrigatória" : "";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
        console.log("Dados enviados para login:", { email, senha }); // Log dos dados

        try {
            const response = await axios.post("http://localhost:8800/login", {
                email: email, 
                senha: senha
            });

            if (response.status === 200) {
                const token = response.data.token;
                const adminStatus = response.data.isAdmin; 
                const idCliente = response.data.id;

                console.log("Resposta do servidor:", response.data); // Log da resposta do servidor
                login(token, adminStatus, idCliente); 
                console.log("Id do cliente:", idCliente); // Log do id do cliente
                // Descomente a navegação após verificar se o login está funcionando
                navigate('/');
            } 
        } catch (error) {
            console.error("Erro na tentativa de login:", error); // Log do erro

            if (error.response) {
                if (error.response.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuário não encontrado',
                        text: 'Verifique suas credenciais e tente novamente.',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro no login',
                        text: 'Algo deu errado. Tente novamente.',
                    });
                }
            } else if (error.request) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro no servidor',
                    text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Um erro ocorreu ao processar sua solicitação.',
                });
            }
        }
    }
};


  const handleForgotSenha = () => {
    console.log("Redirecionar para página de recuperação de senha");
  };

  const handleRegister = () => {
    console.log("Redirecionar para página de registro");

  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
      <GlobalStyle />
      <div className="containerLogo">
        <form onSubmit={handleSubmit}>
          <h1>Access the System</h1>
          
          <div className="input-fieldLOGO">
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: errors.email ? "red" : "" }}
            />
            <FaUser className="icon" />
          </div>
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
          )}
          
          <div className="input-fieldLOGO">
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ borderColor: errors.senha ? "red" : "" }}
            />
            <FaLock className="icon" />
          </div>
          {errors.senha && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.senha}</p>
          )}
          
          <div className="recall-forgetLogo">
            <button type="button" onClick={handleForgotSenha}>
              Forgot your password?
            </button>
          </div>

          <button type="submit">Login</button>

          <div className="signup-linkLogo">
            <p>
            Don't have an account?{" "}
              <button type="button" onClick={handleRegister}>
              Register
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
