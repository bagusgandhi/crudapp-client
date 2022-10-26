import axios from "axios";
import Navbar from "../components/ui/Navbar";
import Input from '../components/ui/Input';
import Button from "../components/ui/Button";
import { useAuth } from '../context/AuthContext';

export default function AddProduct(){

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

        axios.post(import.meta.env.VITE_SERVER_URL+'/products', {
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
                    <h1 className="text-2xl font-bold">Add New Product</h1>
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
                                <p className='text-white font-bold'>Add</p>
                            </Button>
                        </form>
                    </div>
                    <p className='text-red-600 text-center mt-4'>{errors}</p>
                </div>
            </div>
        </>
    );
}