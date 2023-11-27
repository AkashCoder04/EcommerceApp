import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Navbar() {
  var navigate = useNavigate()
  function logout(){
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
       
  <div className="site-wrap">
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top  mt-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-md-4 order-2  order-md-1 site-search-icon text-left">
              <form action="" className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <input type="text" className="form-control border-0" placeholder="Search"/>
              </form>
            </div>

            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <Link to="/" className="js-logo-clone">Shopia</Link>
              </div>
            </div>

            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul>
                {
                  localStorage.getItem("login")?
                  <>
                  <li><Link to="/profile">Krishna Chauhan<span className="icon icon-person"></span></Link></li>
                  <li>
                    <Link to="/cart" className="site-cart">Cart
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">2</span>
                    </Link>
                  </li>   
                  <li><button onClick={logout} className="border-0" style={{background:"none"}}> Logout <i className="bi bi-box-arrow-in-right"></i></button></li>
                  </>:
                  <li><Link to="/login">Login <i className ="bi bi-box-arrow-in-left"></i></Link></li>
                }
                  <li className="d-inline-block d-md-none ml-md-0"><Link to="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></Link></li>
                </ul>
              </div> 
            </div>

          </div>
        </div>
      </div> 
      <nav className="site-navigation text-right text-md-center fixed-top bg-light" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="active">
              <Link to="/">Home</Link>
              
            </li>
            <li className="">
              <Link to="/about">About</Link>
              
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
      </nav>
    </header>
     </div>
    </>
  )
}
