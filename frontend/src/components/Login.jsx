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
        try {
            const response = await axios.post("http://localhost:8800/login", {
                email: email, 
                senha: senha
            });

            if (response.status === 200) {
              const token = response.data.token;
              const adminStatus = response.data.isAdmin; 
              login(token, adminStatus); 
              console.log("Login bem-sucedido:", response.data);
              console.log("Token:", token);
              navigate('/');
            } 
        } catch (error) {
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
                    console.error("Erro no login:", error.response.data);
                }
            } else if (error.request) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro no servidor',
                    text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.',
                });
                console.error("Erro na requisição:", error.request);
            } else {
                // Erro ao configurar a requisição
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Um erro ocorreu ao processar sua solicitação.',
                });
                console.error('Erro desconhecido:', error.message);
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
          <h1>Acesse o Sistema</h1>
          
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
              Esqueceu sua senha?
            </button>
          </div>

          <button type="submit">Login</button>

          <div className="signup-linkLogo">
            <p>
              Não tem uma conta?{" "}
              <button type="button" onClick={handleRegister}>
                Registrar
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
