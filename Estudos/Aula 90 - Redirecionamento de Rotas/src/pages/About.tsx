import { Link } from 'react-router-dom'; /*Dessa forma, a página carregará apenas o que está no Router*/

export const About = () => {
    return (
        <div>
            Página sobre:
            <ul>
                <li><Link to='/sobre/taynan'>Taynan</Link></li>
                <li><Link to='/sobre/livia'>Livia</Link></li>
            </ul>
        </div>
    )
}