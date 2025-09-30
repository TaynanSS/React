import type { JSX } from "react";
import { useNavigate, Navigate } from "react-router-dom";


type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
//  const navigate = useNavigate();  Essa forma é usando quando fazemos o redirecionamento com useNavigate.
    const isAuth = false; // Se colocar como TRUE, o redirecionamento abaixo não é feito.

    if(isAuth) {
        return children;
    } else {
        /* UMA FORMA DE FAZER O REDIRECIONAMENTO usando o useNavigate
        navigate('/login');
        return null;
        */
       // Outra forma de fazer é usando o componente NAVIGATE do react router também.
        return <Navigate to='/login' />
    }
}