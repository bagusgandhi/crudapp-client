import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/ui/Navbar";
import { useAuth } from '../context/AuthContext';

export default function Home(){

    const { name, setName, token, setErrors, errors } = useAuth();

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {
        axios.get(import.meta.env.VITE_SERVER_URL+'/users', {
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then((res) => {
            setName(res.data.data.name);
        })
        .catch((err) => {
            setErrors('Something went wrong!'+ err.response.message);
        })
    }

    return(
        <div className="w-full max-w-2xl mx-auto h-screen">
            <Navbar />
            <div className="p-10">
                <h1 className="text-2xl font-bold">Welcome! {name}</h1>
                <p>Selamat Datang di Crud_App, silahkan tambahkan barangmu <Link to='/product/add'><span className="underline font-bold text-red-500">disini!</span></Link> </p>
            </div>
            <p className='text-red-600 text-center mt-4'>{errors}</p>
        </div>
    );
}