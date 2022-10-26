import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from "../components/ui/Navbar";
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from "../components/ui/Button";
import Plus from '../components/ui/icons/Plus'


export default function Products(){

    const { token, products, setProducts, errors, setErrors, reset } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_URL+'/products', {
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then((res) => {
            setProducts(res.data.data);
        })
        .catch((err) => {
            setErrors('Something went wrong!'+ err.response.message);
        });
    }, []);

    const addProduct = (e) => {
        e.preventDefault();
        navigate('/product/add');
        reset();
    }

    return(
        <>
            <div className="w-full max-w-2xl mx-auto h-screen">
                <Navbar />
                <div className="p-10">
                    <div className="flex items-center gap-4 justify-between">
                        <h1 className="text-2xl font-bold">All Products</h1>
                        <div>
                            <Button
                                type='button'
                                bg='bg-blue-600'
                                bgHover='bg-gray-700'
                                onClick={addProduct}
                            >
                                <p className='text-white font-bold'>
                                    <Plus />
                                </p>
                            </Button>
                        </div>
                    </div>
                        {products.map((product) => (
                            // <Link to={`/product/${product._id}`}>                            
                            //         </Link>
                            <Card  
                                key={product._id}
                                title={product.title}
                                price={product.price}
                                updatedAt={product.updateAt}
                                link={`/product/${product._id}`}
                            />
                        ))}
                </div>
                <p className='text-red-600 text-center mt-4'>{errors}</p>
            </div>
        </>
    );
}