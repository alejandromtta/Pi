import {Link} from 'react-router-dom';
export default function Countrie({name,id,flag,continent}) {
return (
    <div >
        <Link to={`/home/${id}`}>
        <img src={flag} alt='uwu' width="300" height="300"/>
        </Link>
        <p>{name}</p>
        <p>{continent}</p>
    </div>
)
}