import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContextGlobal';

function PrivateRoute ({ children}) {
    const {user} = useUser();

    const isAuthenticated = localStorage.getItem('authToken');  

    return isAuthenticated  && user != null ? children : <Navigate to="/home" />;
};
export default PrivateRoute;