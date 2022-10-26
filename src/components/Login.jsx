import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Login(){
    const { setEmail, email, password, setPassword, setAuth, setErrors, errors, reset } = useAuth();


    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        reset();
        axios.post(import.meta.env.VITE_SERVER_URL+'/users/login', {
            email: email,
            password: password
        }).then((res) => {
            localStorage.setItem('crd_ytkn', res.data.token);
            axios.defaults.headers.common['Authorization'] = 'Bearer'+res.data.token;
            setAuth(true);
            localStorage.setItem('auth', true);
            navigate('/');
            window.location.reload(false);
        }).catch((err) => {
            if(err.response){
                if(err.response.status === 401){
                    setErrors('Invalid Credentials');
                } else {
                    setErrors('Please Try Again');
                }
            }
        });
    }


    return(
        <>
            <form>
                <Input 
                    type='email'
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange={emailHandler}
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={passwordHandler}
                    required
                />
                <Button
                    type='button'
                    onClick={submitHandler}
                    bg='bg-gray-900'
                    bgHover='bg-gray-400'
                >
                    <p className='text-white font-bold'>Login</p>
                </Button>
                <p className='text-red-600 text-center mt-4'>{errors}</p>
            </form>
        </>
    );
}