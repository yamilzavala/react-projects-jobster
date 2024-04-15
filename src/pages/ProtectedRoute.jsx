import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = ({children, target}) => {
    const {user} = useSelector(state => state.userState)

    if(!user) return <Navigate to={`/${target}`} />

    return children;
};

export default ProtectedRoute;