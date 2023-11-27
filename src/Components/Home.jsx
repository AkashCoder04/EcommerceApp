import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getProduct} from '../Store/ActionCreators/ProductActionCreators'
import {useDispatch,useSelector} from 'react-redux'
export default function Home() {
  var product = useSelector((state)=>state.ProductStateData)
  product.reverse()
  product = product.slice(0,8)
  var dispatch = useDispatch()
  useEffect(()=>{
dispatch(getProduct())
  },[])
  return (
    <>
      
    <div className="site-blocks-cover" style={{backgroundImage: "url(assets/images/hero_1.jpg)"}} data-aos="fade">
      <div className="container">
        <div className="row align-items-start align-items-md-center justify-content-end">
          <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">Finding Your Perfect Shoes</h1>
            <div className="intro-text text-center text-md-left">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
              <p>
                <Link to="#" className="btn btn-sm btn-primary">Shop Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section site-section-sm site-blocks-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div className="icon mr-4 align-self-start">
              <span className="icon-truck"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Shipping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon mr-4 align-self-start">
              <span className="icon-refresh2"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Returns</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon mr-4 align-self-start">
              <span className="icon-help"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Customer Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <Link className="block-2-item" to="#">
              <figure className="image">
                <img src="assets/images/women.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Women</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <Link className="block-2-item" to="#">
              <figure className="image">
                <img src="assets/images/children.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Children</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <Link className="block-2-item" to="#">
              <figure className="image">
                <img src="assets/images/men.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Men</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="nonloop-block-3 owl-carousel">
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="assets/images/cloth_1.jpg" alt="" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to="#">Tank Top</Link></h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="assets/images/shoe_1.jpg" alt="" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to="#">Corater</Link></h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="assets/images/cloth_2.jpg" alt="" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to="#">Polo Shirt</Link></h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="assets/images/cloth_3.jpg" alt="" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to="#">T-Shirt Mockup</Link></h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="assets/images/shoe_1.jpg" alt="" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to="#">Corater</Link></h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Latest Products</h2>
          </div>
        </div>
<div className="container">
<div className="row">
{
  product.map((item,index)=>{
    return <div key={index} className="col-lg-3 col-md-4 col-12 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <Link to={`/single-product/${item.id}`}><img className="w-100" src={`assets/productimages/${item.pic1}`} height="300px" alt=""/></Link>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3 className="text-dark font-weight-bold" style={{color:"black",height:"55px"}}>{item.name}</h3>
                    <h3 className="mb-0 font-weight-bold"> <del className="text-danger">${item.baseprice} </del>  <sup>{item.finalprice}</sup></h3>
                    <p className="text-primary text-dark font-weight-bold">Discount {item.discount}%</p>
                  </div>
                </div>
              </div>

  })
}
</div>
</div>

    <div className="site-section block-8">
      <div className="container">
        <div className="row justify-content-center  mb-5">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Big Sale!</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 mb-5">
            <Link to="#"><img src="assets/images/blog_1.jpg" alt="" className="img-fluid rounded"/></Link>
          </div>
          <div className="col-md-12 col-lg-5 text-center pl-md-5">
            <h2><Link to="#">50% less in all items</Link></h2>
            <p className="post-meta mb-4">By <Link to="#">Carl Smith</Link> <span className="block-8-sep">&bullet;</span> September 3, 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
            <p><Link to="#" className="btn btn-primary btn-sm">Shop Now</Link></p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
