import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Input from '../components/ui/Input';
import Button from "../components/ui/Button";
import { useAuth } from '../context/AuthContext';

export default function UpdateProduct(){

    let { productId } = useParams();

    const { 
        token,
        productTitle,
        setProductTitle,
        productPrice,
        setProductPrice,
        productDescription,
        setProductDescription,
        errors,
        setErrors,
        reset
     } = useAuth();

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
            setProductTitle(res.data.data.title);
            setProductPrice(res.data.data.price);
            setProductDescription(res.data.data.description)
        })
        .catch((err) => {
            setErrors('Something went wrong! '+ err.response.message);
        })
    }

    const titleHandler = (e) => {
        setProductTitle(e.target.value)
    }
    const priceHandler = (e) => {
        setProductPrice(e.target.value)
    }
    const descriptionHandler = (e) => {
        setProductDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.patch(import.meta.env.VITE_SERVER_URL+'/products/'+productId, {
            title: productTitle,
            price: productPrice,
            description: productDescription,
        }, 
        {
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then((res) => {
            alert(res.data.message);
        })
        .catch((err) => {
            setErrors('Something went wrong!'+ err.response.message);
        });

        reset();
    }

    return(
        <>
            <div className="w-full max-w-2xl mx-auto h-screen">
                <Navbar />
                <div className="p-10">
                    <h1 className="text-2xl font-bold">Edit Product</h1>
                    <div className="pt-4">
                        <form>
                            <Input 
                                type='text'
                                name='title'
                                placeholder='Product Title'
                                border='border '
                                value={productTitle}
                                onChange={titleHandler}
                            />
                            <Input 
                                type='number'
                                name='price'
                                placeholder='Product Price'
                                border='border '
                                value={productPrice}
                                onChange={priceHandler}
                                />
                            <textarea 
                                className='block rounded-xl bg-gray-50 w-full border p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:outline-none focus:bg-gray-100 mb-4'
                                name='description'
                                rows='4'
                                placeholder="Product Description"
                                value={productDescription}
                                onChange={descriptionHandler}
                            />
                            <Button
                                type='button'
                                bg='bg-blue-600'
                                bgHover='bg-blue-400'
                                onClick={submitHandler}
                            >
                                <p className='text-white font-bold'>Update</p>
                            </Button>
                        </form>
                    </div>
                    <p className='text-red-600 text-center mt-4'>{errors}</p>
                </div>
            </div>
        </>
    );
}