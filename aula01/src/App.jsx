import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Layout from './Layout';
import NotFound from './NotFound';
import Orders from './Orders';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/orders" element={<Orders />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
