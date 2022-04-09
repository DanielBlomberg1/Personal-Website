import { Link } from 'react-router-dom';
const BackHome = () =>  {
    return(
        <div className="absolute right-0 top-0 h-20 w-36 mt-2 shadow-lg ...">
            <Link to="/" className='btn btn-danger'>Back to home</Link>
        </div>
    )
}
export default BackHome;