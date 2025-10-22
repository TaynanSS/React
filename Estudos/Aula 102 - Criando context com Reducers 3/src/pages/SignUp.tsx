import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';


export const SignUp = () => {

    const { state, dispatch } = useContext(Context);

    const handleClickName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Lívia'
            }
        });
    }

    return (
        <div>
            Tela SignUp de {state.user.name} que tem {state.user.age} anos.
            <button onClick={handleClickName} >Troca nome para Lívia</button>
            <br />
            <Link to='/exibir'>Ir para ShowData</Link>
        </div>
    )
}