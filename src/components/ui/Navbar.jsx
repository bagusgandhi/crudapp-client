import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from '../../context/AuthContext';

export default function Navbar(){
    const navigate = useNavigate();

    const { name, products, setName, setProducts, reset} = useAuth();

    const logout = (e) => {
        e.preventDefault();
        reset();
        localStorage.removeItem('auth');
        localStorage.removeItem('crd_ytkn');
        navigate('/auth');
        window.location.reload(false);
    }
    const menu = [
        { 
            title : 'Home',
            links: '/'
        },
        { 
            title : 'Products',
            links: '/products'
        },
        { 
            title : 'Profile',
            links: '/profile'
        },

    ]

    return(
        <>
        <header className="flex justify-between p-4 bg-gray-900 rounded-lg text-white items-center">
            <div>
                <h3>Crud_App</h3>
            </div>
            <nav>
                <ul className="flex gap-4">
                    {menu.map((m, index) => (
                        <li key={index}>
                            <Link to={m.links}>
                                { m.title }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <Button
                    type='button'
                    onClick={logout}
                    bg='bg-red-600'
                    bgHover='bg-red-400'
                >
                    <p className='text-white font-bold'>Log Out</p>
                </Button>
            </div>
        </header>
        </>
    );
}