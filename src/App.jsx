import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';
import UpdateProduct from './pages/UpdateProduct';
import Profile from './pages/Profile';


function App() {

  const { auth } = useAuth();

  return (
    <div className="mx-auto bg-gray-100 h-screen'">
      <Router>
        <Routes>
          <Route element={<PrivateRoute auth={auth} />}>
            <Route element={<Home />} path='/' exact/>
            <Route element={<Products />} path='/products'/>
            <Route element={<Profile />} path='/profile'/>
            <Route element={<AddProduct />} path='/product/add' exact/>
            <Route element={<ProductDetail />} path='/product/:productId'/>
            <Route element={<UpdateProduct />} path='/product/:productId/edit'/>
          </Route>
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
