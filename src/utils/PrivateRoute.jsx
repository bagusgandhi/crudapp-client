import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute({ auth }){
    return (
        auth ? <Outlet /> : <Navigate to='/auth' />
    )
}