import { Link, useSearchParams } from 'react-router-dom'; /*Dessa forma, a página carregará apenas o que está no Router*/

// useSearchParams => Geralmente é usado quando é necessário fazer algum filtro ou ordenação na hora de pesquisar na URL.

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return (
        <div>
            Filtro: {searchParams.get('filter')}<br/>
            Ordem: {searchParams.get('order')}
            <hr/>
            <button className='pr-2' onClick={()=> setOrder('asc')} >Asc</button>
            <button onClick={()=>setOrder('desc')} >Desc</button>
            <hr/>
            Página sobre:
            <ul>
                <li><Link to='/sobre/taynan'>Taynan</Link></li>
                <li><Link to='/sobre/livia'>Livia</Link></li>
            </ul>
        </div>
    )
}