import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Button from "../components/ui/Button";
import { useAuth } from '../context/AuthContext';

export default function ProductDetail(){

    let { productId } = useParams();
    const navigate = useNavigate();

    const { token, singleProduct, setSingleProduct, setErrors, errors } = useAuth();

    useEffect(() => {
        getProductById();
    },[]);

    const getProductById = () => {
        axios.get(import.meta.env.VITE_SERVER_URL+'/products/'+productId, {
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then((res) => {
            setSingleProduct(res.data.data);
        })
        .catch((err) => {
            setErrors('Something went wrong! '+ err.response.message);
        })
    }

    const deleteProductById = (e) => {
        e.preventDefault();
        axios.delete(import.meta.env.VITE_SERVER_URL+'/products/'+productId, {
            headers: {
                'Authorization': 'Bearer '+token
            }
        }).catch((err) => {
            setErrors('Something went wrong! '+ err.response.message);
        });
        navigate('/products');
    }

    return(
        <>
            <div className="w-full max-w-2xl mx-auto h-screen">
                <Navbar />
                <div className="p-10">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">{singleProduct?.title}</h1>
                        <h3 className="font-bold bg-green-200 p-2 rounded-lg">${singleProduct?.price}</h3>
                    </div>
                    <p className="py-4">{singleProduct?.description}</p>
                    <Button
                        type='button'
                        bg='bg-red-600'
                        bgHover='bg-red-700'
                        onClick={deleteProductById}
                    >
                        <p className='text-white font-bold'>Delete</p>
                    </Button>
                </div>
            </div>
        </>
    );
}