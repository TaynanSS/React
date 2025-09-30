import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate(); // Usado para fazer várias coisas, e uma delas é usar num botão para voltar a página anterior.

    const handleBackButton = () => {
        navigate(-1); // Aqui eu estou voltando uma página, independente de qual seja a página anterior do histórico.
    }

    const handleHomeButton = () => {
        let name: string = 'Pedro';

        navigate(`/sobre/${name}`); // Aqui estou colocando uma informação que vem de foram. Assim podendo substituir para onde quer ir de maneira dinâmica.

        navigate('/'); // Vale lembrar que nesse caso eu não estou voltando pra página HOME, eu estou INDO para a página HOME.
    }

    return (
        <div>
            Página sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras)
            <hr/>
            <button className='pr-2' onClick={handleBackButton} >Voltar</button>
            <button onClick={handleHomeButton} >Home</button>
        </div>
        
    ) 
}