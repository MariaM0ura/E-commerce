import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle `

html,
body, * {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  box-sizing: border-box;

}
::-webkit-scrollbar {
  width: 0px;
}

a {
  color: inherit;
  text-decoration: none;
}

.main-container{
max-width: 1400px; 
margin: auto;
width: 100%;

}
.layout{
  padding: 10px;
}

.navbar-container{
  display: flex;
  justify-content: space-between;
  margin: 6px 18px;
  position: relative;
}
.marquee-text{
  font-size: 29px;
  font-weight: 600;
  margin: 60px 0px;
  color: #f02d34;
}
.marquee {
  position: relative;
  height: 400px;
  width: 100%;
  overflow-x: hidden;
}

.track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 15s linear infinite;
  width: 180%;
}
.track:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

 span.text-red {
    -webkit-text-stroke: 1px #f02d34;
    margin-left: 6px;
}
.logo{
  color: gray;
  font-size: 18px;

}
.cart-icon{
  font-size: 30px;
  color: gray;
  cursor: pointer;
  position: relative;
  transition: transform .4s ease;
  border: none;
  background-color: transparent;
}
.cart-icon:hover{
  transform: scale(1.1,1.1);
}
.cart-item-qty{
  position: absolute;
  right: -8px;
  font-size: 12px;
  color: #eee;
  background-color: #f02d34;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;

}
.products-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
}
.product-card{
 cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
 color: #324d67;

}
.product-card:hover{
  transform: scale(1.1,1.1)
}
.product-image{
  border-radius: 15px;
 background-color: #ebebeb;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
}

.product-name{
  font-weight: 500;
}
.product-price{
  font-weight: 800;
  margin-top: 6px;
  color: black;
}

.hero-banner-container{
  padding: 100px 40px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  height: 500px;
  line-height: 0.9; 
  width: 100%;

}
.hero-banner-container .beats-solo{
  font-size: 20px;
}
.hero-banner-container button{
   border-radius: 15px;
  padding: 10px 16px;
  background-color: #f02d34;
  color: white;
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  z-index:10000 !important;
}

.hero-banner-container h3{
  font-size: 4rem;
  margin-top: 4px;
}
.hero-banner-container h1{
  color: white;
  font-size: 10em;
  margin-left: -20px;
  text-transform: uppercase;
}
.hero-banner-image{
  position: absolute;
  top: 0%;
  right:20%;
  width: 450px;
  height: 450px;
}


.desc{
position: absolute;
right: 10%;
bottom: 5%;
width: 300px;
line-height: 1.3;
display: flex;
flex-direction: column;
 color: #324d67;

}
.desc p{
  color: #5f5f5f;
  font-weight: 100;
text-align: end;
}
.desc h5{
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  /* color: black; */
  align-self: flex-end;
}
.products-heading{
  text-align: center;
  margin: 40px 0px;
 color: #324d67;

}
.products-heading h2{
  font-size: 40px;
  font-weight: 800;
}
.products-heading p{
  font-size: 16px;
  font-weight: 200;
}
.footer-banner-container{
  padding: 100px 40px;
  background-color: #f02d34;
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 1; 
  color: white;
  width: 100%;
  margin-top: 120px;
}
.banner-desc{
  display: flex ;
  justify-content: space-between;
}
.banner-desc button{
  border-radius: 15px;
  padding: 10px 16px;
  background-color: white;
  color: red;
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.banner-desc .left h3{
  font-weight: 900;
  font-size: 80px;
  margin-left: 25px;
}
.banner-desc .left p{
  margin:18px;
}
.footer-banner-image{
  position: absolute;
  /* top: -35%;
  left: 8%; */
  top: -25%;
  left: 25%;
}
.banner-desc .right{
  line-height: 1.4;
}
.banner-desc .right h3{
  font-weight: 800;
  font-size: 60px;
}
.banner-desc .right p{
  font-size: 18px;
}
.banner-desc .right .company-desc{
  font-size: 14px;
  font-weight: 300;
}
.cart-wrapper{
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  /* will-change: transform; */
  transition: all 1s ease-in-out;

}
.cart-container{
  height: 100vh;
  width: 600px;
  background-color: white;
  float: right;
  padding: 40px 10px;
  position: relative;
  
}

.footer-container{
  color: #324d67;
  text-align: center;
  margin-top: 20px;
  padding: 30px 10px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

}
.footer-container .icons{
  font-size: 30px;
  display: flex;
  gap: 10px;
}
 .cart-heading{
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  gap: 2px;
  margin-left: 10px;
  border: none;
  background-color: transparent;
}

.cart-heading .heading{
  margin-left: 10px;
}
.cart-num-items{
  margin-left: 10px;
  color: #f02d34;
}
.empty-cart{
  margin:40px;
  text-align:center;
}
.empty-cart h3{
  font-weight: 600;
  font-size: 20px;
}
.cancel{
  cursor: pointer;
}
.product-container{
  margin-top: 15px;
  overflow: auto;
max-height: 70vh;
padding: 20px 10px;
}
.product{
  display: flex;
 gap: 30px;
  padding: 20px;
}
.product .cart-product-image{
  width:180px ;
  height: 150px;
    border-radius: 15px;
 background-color: #ebebeb;
}
.item-desc .flex{
  display: flex;
  justify-content: space-between;
  width: 350px;
   color: #324d67;

}
.item-desc .bottom{
  margin-top: 60px;
}
.flex h5{
  font-size: 24px;
}
.flex h4{
  font-size: 20px;
}
.total{
  display: flex;
  justify-content: space-between;
}
.total h3{
  font-size: 22px;

}
.remove-item{
  font-size: 24px;
  color: #f02d34;
  cursor: pointer;
  background: transparent;
  border: none;
}
.cart-bottom{
  position: absolute;
  bottom: 12px;
  right: 5px;
width: 100%;
padding: 30px 65px;

}

.btn-container{
  width: 400px;
  margin: auto;
}
.btn{
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: #f02d34;
  color: #fff;
  cursor: pointer;
    transform: scale(1, 1);
  transition: transform 0.5s ease;
}
.btn:hover{
  transform: scale(1.1,1.1);
}
.product-detail-container{
  display: flex;
 gap: 40px;
 margin: 40px;
 margin-top: 60px;
 color: #324d67;

}

.product-detail-image{
  border-radius: 15px;
   background-color: #ebebeb;

  width: 400px;
  height: 400px;
  cursor: pointer;
}
.product-detail-image:hover{
  background-color: #f02d34;

}
.small-images-container{
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.small-image{
  border-radius: 8px;
  background-color: #ebebeb;
  width: 70px;
  height: 70px;
  cursor: pointer;
}

.selected-image{
  background-color:#f02d34;
}
.reviews{
  color: #f02d34;
  margin-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
}

.product-detail-desc h4{
  margin-top: 10px;
}
.product-detail-desc p{
  margin-top: 10px;
}
.reviews p{
  color: #324d67;
  margin-top: 0px;
}
.product-detail-desc .price{
  font-weight: 700 ;
  font-size: 26px;
  margin-top: 30px;
  color:#f02d34;
}
.price .old-price, .product-price .old-price, .price .old-price{
  color: gray;
  text-decoration: line-through;
}
.product-detail-desc .quantity{
  display: flex;
  gap: 20px;
  margin-top: 10px ;
  align-items: center;
}
.product-detail-desc .buttons{
  display: flex;
  gap: 30px;
}
.buttons .add-to-cart{
  padding: 10px 20px;
  border: 1px solid #f02d34 ;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  background-color: white;
  color: #f02d34;
  cursor: pointer;
  width: 200px;
   transform: scale(1, 1);
  transition: transform 0.5s ease;
}
.buttons .add-to-cart:hover{
  transform:scale(1.1,1.1)
}
.buttons .buy-now{
  width: 200px;

  padding: 10px 20px;
  background-color: #f02d34;
  color: white;
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
   transform: scale(1, 1);
  transition: transform 0.5s ease;
}
.buttons .buy-now:hover{
  transform:scale(1.1,1.1)
}
.quantity-desc{
  border: 1px solid gray;
padding: 6px;
}
.quantity-desc span{
  font-size: 16px;
  padding: 6px 12px;
  cursor: pointer;
}
.quantity-desc .minus{
  border-right: 1px solid gray;
  color: #f02d34;
}
.quantity-desc .num{
  border-right: 1px solid gray;
  font-size: 20px;
}
.quantity-desc .plus{
  color: rgb(49, 168, 49);

}

.maylike-products-wrapper{
  margin-top: 120px;
}
.maylike-products-wrapper h2{
  text-align: center;
  margin: 50px;
  color: #324d67;

  font-size: 28px;
}
.maylike-products-container{
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
.max-qty{
  font-weight: 500;
  color: #f02d34;
}
.success-wrapper, .cancel-wrapper{
  background-color: white;
  min-height: 60vh;

}
.success, .cancel{
  width: 1000px;
margin: auto;
margin-top: 160px;
  background-color: #dcdcdc;
  padding: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.success .icon {
   color: green;
   font-size: 40px;
}
.success h2{
  text-transform: capitalize;
  margin-top: 15px 0px;
  font-weight: 900;
  font-size: 40px;
  color:#324d67;
}
.success .email-msg{
   font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.cancel p{
  font-size: 20px;
  font-weight: 600;
}
.success .description{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
  margin-top: 30px;
}
.success .description .email{
  margin-left: 5px;
  color: #f02d34;
}
.product-max-qty{
  margin-top: 10px;
}

@media screen and (max-width:800px) {
  .hero-banner-container{
    height: 560px;
  }
  .hero-banner-image{
    width: 77%;
    height: 62%;
    top: -2%;
    right: -6%;
  }
  .footer-banner-container{
    height: 560px;
    margin-top: 80px;
  }
  .footer-banner-image{
    width: 77%;
    left: 30%;
    top: 6%;
    height: 56%
  }
  .banner-desc .left h3{
    font-weight: 900;
    font-size: 50px;
    margin-left: 5px;
  }
  .banner-desc .left p{
    margin:18px;
  }
  .banner-desc .right h3{
    font-size: 45px;
  }
  .banner-desc .right p{
    font-size: 18px;
  }
  .banner-desc .right .company-desc{
    font-size: 14px;
  }
  .banner-desc{
    flex-wrap: wrap;
    gap: 20px;
  }
  .hero-banner-container{
    line-height: 1.3;
  }
  .hero-banner-container h1{
    font-size: 50px;
  }
 .hero-banner-container h3{
    font-size: 40px;
  }
  .hero-banner-container button{
    margin-top: 90px;
    z-index: 10000;
  }
  .desc{
   bottom: 60px;
  }

  .login-icon{
    display: none;
    gap: 10px;
    padding: 10px;
    border: none;
    background-color: transparent;
    height: 30px;
  }
  .page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  }
  .product-detail-container{
    flex-wrap:flex;
    gap: 20px;
    padding-right: 20px;
    }
  .product-detail-container .product-detail-image{
    width: 350px;
    height: 350px;
  }
  .cart-container{
    width: 415px;
  padding: 4px;
  }
  .cart-heading{
    margin-top: 35px;
  }
  .product-container{
    margin-top: 10px;
  }
  .product{
    padding: 20px 5px;

  }
  .product .cart-product-image{
    width: 25%;
    height: 25%;
  }
  .buttons .add-to-cart{
    width: 150px;
  }
  .buttons .buy-now{
    width: 150px;
  }
  .product-detail-container{
    margin: 20px;
  }

.item-desc .flex{
  width: 200px;
}
.top{
  flex-wrap: wrap;
  gap: 10px;


}
.item-desc .bottom{
  margin-top: 30px;
}
.flex h5{
  font-size: 16px;
   color: #324d67;
}
.flex h4{
  font-size: 16px;
   color: black;
}
.cart-bottom{
  padding: 30px;
}

.total h3{
  font-size: 20px;
}
.track {
  animation: marquee 10s linear infinite;
  width: 550%;
}
.success-wrapper, .cancel-wrapper{
 
  min-height: 69vh;
}
.success, .cancel {
   width: 370px;
  margin-top: 100px;
  padding: 20px;
}
.success{
  height: 350px;
}
.success h2{
  font-size: 17px;
}
.btn-container{
  width: 300px;
  margin: auto;
}
}

  .containerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    background-color: #dcdcdc;
    backdrop-filter: blur(12px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); /* Adiciona sombra ao containerLogo */
    transition: all 0.3s ease-in-out;
  }

  .containerLogo h1 {
    text-align: center;
    font-size: 28px;
    color: #324d67;
    margin-bottom: 20px;
  }

  .input-fieldLOGO {
    position: relative;
    width: 100%;
    margin: 25px 0;
  }

  .input-fieldLOGO input {
    width: 100%;
    height: 45px;
    background: #fff;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    font-size: 16px;
    color: #324d67;
    padding: 0 45px 0 25px;
    transition: border-color 0.3s ease;
  }

  .input-fieldLOGO input:focus {
    border-color: #324d67; /* Muda a cor da borda ao focar */
  }

  .input-fieldLOGO input::placeholder {
    color: #324d67;
    opacity: 0.8;
  }

  .input-fieldLOGO .icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #324d67;
    background: #fff;
  }

  .recall-forgetLogo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: 15px 0;
  }

  .recall-forgetLogo label {
    display: flex;
    align-items: center;
    color: #324d67;
  }

  .recall-forgetLogo button {
    background: none;
    border: none;
    color: #324d67;
    text-decoration: underline;
    cursor: pointer;
    font-size: inherit;
  }

  .containerLogo button {
    width: 100%;
    height: 50px;
    background: #fff;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    color: #324d67;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra ao botão */
  }

  .containerLogo button:hover {
    background-color: #324d67;
    color: #fff;
    transform: translateY(-3px); /* Efeito de leve subida ao passar o mouse */
  }

  .signup-linkLogo {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }

  .signup-linkLogo button {
    background: none;
    border: none;
    color: #324d67;
    text-decoration: underline;
    cursor: pointer;
    font-size: inherit;
  }

  @media (max-width: 600px) {
    .containerLogo {
      width: 90%;
      padding: 30px;
      background: #324d67;
    }

    .containerLogo h1 {
      font-size: 24px;
    }

    .containerLogo button {
      height: 45px;
    }
  }

  /* ProductForm.css */

.product-form {
    max-width: 400px; /* Limita a largura do formulário */
    margin: 20px auto; /* Centraliza o formulário na página */
    padding: 20px; /* Adiciona espaço interno ao redor do formulário */
    border: 1px solid #ccc; /* Adiciona uma borda ao redor do formulário */
    border-radius: 8px; /* Arredonda os cantos da borda */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil */
    background-color: #f9f9f9; /* Define uma cor de fundo clara */
}

.product-form h2 {
    text-align: center; /* Centraliza o título do formulário */
    margin-bottom: 20px; /* Espaço abaixo do título */
}

.product-form input {
    width: 100%; /* Faz os inputs ocuparem toda a largura do formulário */
    padding: 10px; /* Adiciona espaço interno aos inputs */
    margin-bottom: 15px; /* Espaço abaixo de cada input */
    border: 1px solid #ccc; /* Define uma borda para os inputs */
    border-radius: 4px; /* Arredonda os cantos dos inputs */
}

.product-form button {
    width: 100%; /* Faz o botão ocupar toda a largura do formulário */
    padding: 10px; /* Adiciona espaço interno ao botão */
    border: none; /* Remove a borda padrão do botão */
    border-radius: 4px; /* Arredonda os cantos do botão */
    background-color: #007bff; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    cursor: pointer; /* Altera o cursor ao passar o mouse sobre o botão */
    font-size: 16px; /* Tamanho da fonte do botão */
}

.product-form button:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
}

.product-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.product-table th, .product-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
}

.product-table th {
    background-color: #007bff;
    color: white;
}

.product-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.best-selling-product {
    background-color: #e7f3fe;
    border: 1px solid #b8daff;
    padding: 10px;
    border-radius: 5px;
}

.product-detail-container-dashboard {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-detail-container-dashboard h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.product-detail-container-dashboard h2 {
    font-size: 20px;
    margin-top: 20px;
}


  `;

  export default Global;