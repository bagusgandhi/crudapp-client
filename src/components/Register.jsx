import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from './ui/Input';
import Button from './ui/Button';


export default function Register(){

    const { 
        setEmail, 
        email, 
        password, 
        setPassword, 
        setAuth, 
        setErrors, 
        errors, 
        name,
        setName,
        gender,
        passwordConfirm,
        setPasswordConfirm,
        setGender,
        reset
     } = useAuth();

    const navigate = useNavigate();

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const genderHandler = (e) => {
        setGender(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordConfirmHandler = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        reset();
        axios.post(import.meta.env.VITE_SERVER_URL+'/users/register', {
            name: name,
            email: email,
            gender: gender,
            password: password,
            passwordConfirm: passwordConfirm
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
                    type='text'
                    name='name'
                    placeholder='fullname'
                    value={name}
                    onChange={nameHandler}
                />
                <Input 
                    type='email'
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange={emailHandler}
                />
                <select 
                    className='block rounded-xl bg-gray-50 w-full  p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:outline-none focus:bg-gray-100 mb-2' 
                    name='Gender' 
                    onChange={genderHandler}
                >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <Input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={passwordHandler}
                    required
                />
                <Input 
                    type='password'
                    name='passwordConfirm'
                    placeholder='password confirm'
                    value={passwordConfirm}
                    onChange={passwordConfirmHandler}
                    required
                />
                <Button
                    type='button'
                    onClick={submitHandler}
                    bg='bg-gray-900'
                    bgHover='bg-gray-400'
                >
                    <p  className='text-white font-bold'>Register</p>
                </Button>
                <p className='text-red-600 text-center mt-4'>{errors}</p>
            </form>
        </>
    );
}