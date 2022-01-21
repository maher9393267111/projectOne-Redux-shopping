import './styles/nav.css'
  import {Link} from 'react-router-dom';
import logo from './images/logo.jpg'
function Nav() {
    return (
      <div >

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

  <Link className='logoLink' to='/'><img className='logo-nav' src={logo} alt="logo"/>
                  <p className><span>C</span>lothes</p>
                 </Link>

                 <div className="shopping-icon mobile-shopping">
                 <Link to="/cart">
                 <i class="fas fa-shopping-cart"></i> <span>0</span>
                 </Link>

                 </div>




    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" nav-links collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to ='/' className="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to= '/about' className="nav-link" href="#">About</Link>
        <Link className="nav-link" to='/products'>Products</Link>
          <Link className="nav-link" to='/contact'>Contact</Link>
        </div>
    </div>
  </div>
</nav>













      </div>
    );
  }

  export default Nav;
