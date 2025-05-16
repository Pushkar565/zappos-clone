// App.jsx or MainRoutes.jsx

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductPageComponent from './pages/ProductPage';
import Home from './pages/Home'; 

const App = () => {
  return (
    <>
    <Router>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPageComponent />} />
        </Routes>
     
    </Router>
    </>
    
    

  );
};

export default App;
