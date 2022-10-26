import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/ui/Navbar";
import { useAuth } from '../context/AuthContext';

export default function Profile(){

    const { profile, setProfile, token, setErrors, errors } = useAuth();

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
            setProfile(res.data.data);
        })
        .catch((err) => {
            setErrors('Something went wrong!'+ err.response.message);
        })
    }

    return(
        <>
            <div className="w-full max-w-2xl mx-auto h-screen">
                <Navbar />
                <div className="p-10 text-center">
                    <h1 className="text-2xl font-bold"> 
                        {profile?.name}
                    </h1>
                    <p>{profile?.email}</p>
                    <p>{profile?.gender}</p>
                </div>
                <p className='text-red-600 text-center mt-4'>{errors}</p>
            </div>
        </>
    );
}