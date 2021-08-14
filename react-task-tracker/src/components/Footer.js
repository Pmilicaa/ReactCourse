import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


const Footer = () => {

    const location = useLocation()

    return (
        
        <footer>
            {location.pathname ==='/' ? 
                (<p>
                    Copyright &copy; 2021 <br/>
                    <Link to='/about'>About</Link>
                </p>)
               : ''
            }
        </footer>
        
    )
}

export default Footer
