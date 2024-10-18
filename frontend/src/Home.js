import GlobalStyle from './styles/globals';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product, FooterBanner, HeroBanner, ProductForm } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try{
      const response = await axios.get('http://localhost:8800');
      
      const data = response.data.products || response.data; // 
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Os dados recebidos não são um array:', data);
      }

      setLoading(false);
    }catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    getProducts();
    console.log('produtos:');
    console.log(products);
    console.log(products[1]);
  }, [setProducts]);

  return (
    <div>
      <HeroBanner product={products}/>
      <GlobalStyle />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers There are many variantions passges</p>

      </div>
      <div className='products-container'>
            {products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>

      <FooterBanner product={products}/>
    </div>
  );
}

export default App;
