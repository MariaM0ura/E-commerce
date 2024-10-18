import GlobalStyle from './styles/globals';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Product, FooterBanner, HeroBanner, ProductCard } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8800/product/${id}`);
          setProduct(response.data); 
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (!product) return <div>Loading...</div>;
  
    return <ProductCard product={product} />; 
  };

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
    <Routes>
      <Route path='/' element={
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
      } />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>

  );
}

export default App;
