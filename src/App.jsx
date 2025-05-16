// App.jsx or MainRoutes.jsx

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductPageComponent from './pages/ProductPage';
import Home from './pages/Home'; 
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
    <Router>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPageComponent />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
     
    </Router>
    </>
    
    

  );
};

export default App;
