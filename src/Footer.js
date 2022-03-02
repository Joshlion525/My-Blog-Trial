import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return ( 
        <footer className="footer">
                <Link to="/">
                  <div>
                    <FontAwesomeIcon icon="home" />
                    <p>Home</p>
                  </div>
                </Link>
                <Link to="/create">
                  <div>
                    <FontAwesomeIcon icon="pen"/>
                    <p>New Blog</p>
                  </div>
                </Link>
                <Link to="">
                  <div>
                    <FontAwesomeIcon icon="user"/>
                    <p>Profile</p>
                  </div>
                </Link>
        </footer>
     );
}
 
export default Footer;