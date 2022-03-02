import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    return ( 
       <nav className='navbar'>
           <h1><i>J'R</i></h1>
           <div className='links'>
               <Link to="">
                <div>
                  <FontAwesomeIcon icon="bell"/>
                </div>
               </Link>
           </div>
       </nav>
     );
}
 
export default Navbar;