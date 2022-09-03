// import logo from './logo.svg';
import './App.css';


import Product from './Component/e-comm/Product';
import About from './Component/e-comm/About';
import Contact from './Component/e-comm/Contact';
import Blog from './Component/e-comm/Blog';
import Header from './Component/e-comm/Header';
import Home from './Component/e-comm/Home';
 import { BrowserRouter , Routes , Route} from 'react-router-dom';
 
// import Home from './Practice/Home';
// import About from './Practice/About';
// import Card from './Practice/Card';
// import Products from './Practice/Products';
// import Contact from './Practice/Contact';
// import Blog from './Practice/Blog';
// import Header from './Practice/Header';


// import Home from './Component/Templet/Home';


//  import About from './Component/Style/About';
//  import Prod from './Component/Style/Prod';
// import Contact from './Component/Style/Contact';

function App() {
  return (

    // <>
    //   <BrowserRouter>
    //   <Header/>
    //     <Routes>
    //         <Route path="/" element={<Home/>} />
    //         <Route path="/about" element={<About />} />
    //         {/* <Route path="/card" element={<Card />} /> */}
    //         {/* <Route path="/products" element={<Products />} /> */}
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/blog" element={<Blog />} />
    //     </Routes>
    //   </BrowserRouter>
      
    // </>
    
    // <Header/>
    // E-comm website design
    <>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </BrowserRouter> 
    </>
    // End of E-comm website design


    // <Home/>
    // <Product/>
   
    
  );
}

export default App;
