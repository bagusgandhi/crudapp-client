import { useState, useContext, createContext  } from "react";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }){
    // auth & user
    const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === 'true');
    const [token, setToken] = useState('' || window.localStorage.getItem('crd_ytkn'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState('');
    const [tabs] = useState(['Login', 'Register']);

    // products
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState();
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    // profile
    const [profile, setProfile] = useState();

    const reset = () => {
        setErrors('');
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setProducts([]);
        setProductTitle('');
        setProductPrice('');
        setProductDescription('');
        setProfile('');
    }

    const value = {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm,
        token,
        setToken,
        auth,
        setAuth,
        errors,
        setErrors,
        gender,
        setGender,
        tabs,
        products,
        setProducts,
        reset,
        singleProduct,
        setSingleProduct,
        productTitle,
        setProductTitle,
        productPrice,
        setProductPrice,
        productDescription,
        setProductDescription,
        profile,
        setProfile
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}