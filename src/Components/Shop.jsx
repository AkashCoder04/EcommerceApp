import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../Store/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../Store/ActionCreators/BrandActionCreators";
import { useDispatch, useSelector } from "react-redux";
export default function Shop() {
  const [mc,setmc]=useState("All")
  const [sc,setsc]=useState("All")
  const [br,setbr]=useState("All")
  const [flag,setflag]=useState(0)
const [shopproducts,setshopproducts]=useState([])

  var product = useSelector((state) => state.ProductStateData);
  var maincategory = useSelector((state) => state.MaincategoryStateData);
  var subcategory = useSelector((state) => state.SubcategoryStateData);
  var brand = useSelector((state) => state.BrandStateData);
  

  var dispatch = useDispatch();
  product.reverse();
  function getSelectedData(mc,sc,br){
var p = []
    if(mc==="All" && sc==="All" && br==="All")
    p=product
    else  if(mc!=="All" && sc==="All" && br==="All")
    p = product.filter((item)=>item.maincategory===mc)

    else  if(mc==="All" && sc!=="All" && br==="All")
    p = product.filter((item)=>item.subcategory===sc)

    else  if(mc==="All" && sc==="All" && br!=="All")
    p = product.filter((item)=>item.brand===br)

    else  if(mc!=="All" && sc!=="All" && br==="All")
    p = product.filter((item)=>item.maincategory===mc && item.subcategory===sc)

    
    else  if(mc!=="All" && sc==="All" && br!=="All")
    p = product.filter((item)=>item.maincategory===mc && item.brand===br)

     
    else  if(mc==="All" && sc!=="All" && br!=="All")
    p = product.filter((item)=>item.subcategory===sc && item.brand===br)

    else
    p = product.filter((item)=>item.maincategory===mc && item.subcategory===sc && item.brand===br)
    setshopproducts(p)
  }
  function getSelected(e){
    var name = e.target.name
    var value = e.target.value
 if(name==="maincategory")
 {
  setmc(value)
  getSelectedData(value,sc,br)
 }
 else if(name==="subcategory")
 {
  setsc(value)
  getSelectedData(mc,value,br)
 }
 else
 {
  setbr(value)
  getSelectedData(mc,sc,value)
 }
  } 
  function getSort(e){
    var value = e.target.value
    if(value==="latest"){
      setshopproducts(product.sort((a,b)=>a.id-b.id))
    }
   else if(value==="ltoh"){
      setshopproducts(product.sort((a,b)=>a.finalprice-b.finalprice))
    }
    else{
      setshopproducts(product.sort((a,b)=>b.finalprice-a.finalprice))
    }

    if(flag===0){
      setflag(1)
    }
    else{
      setflag(0)
    }
    }

function getPriceFilter(e){
  var value = e.target.value
  var p = []
  if(value === ">5000")
  p = product.filter((item)=>item.finalprice>=5000)
  else{
    var min = value.split("-")[0]
    var max = value.split("-")[1]
    p = product.filter((item)=>item.finalprice>=min && item.finalprice<max)
  }
  setshopproducts(p)
}

function getSizeFilter(e){
 var value = e.target.value
 setshopproducts(product.filter((item)=>item.size===value))
}

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
    setshopproducts(product);
  }, [product.length]);
  return (
    <>
    
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="d-flex">
                   
                    <div className="dropdown mr-1 ml-md-auto" style={{width:"25%"}}>
                     <label className="bg-secondary text-light text-center p-2 w-100">Maincategory</label>
                    <select name="maincategory" className="form-control" onChange={getSelected}>
                    <option value="All" className="pl-3">All</option>
                        {
                          maincategory.map((item,index)=>{
                            return <option key={index} value={item.name} className="pl-3">{item.name}</option>
                          })
                        }
                        </select>
                    </div>
                    <div className="dropdown mr-1 ml-md-auto" style={{width:"25%"}}>
                     <label className="bg-secondary text-light text-center p-2 w-100">Subcategory</label>
                    <select name="subcategory" className="form-control" onChange={getSelected}>
                    <option value="All" className="pl-3">All</option>
                        {
                          subcategory.map((item,index)=>{
                            return <option key={index} value={item.name} className="pl-3">{item.name}</option>
                          })
                        }
                        </select>
                    </div>
                    <div className="dropdown mr-1 ml-md-auto" style={{width:"25%"}}>
                     <label className="bg-secondary text-light text-center p-2 w-100">Brand</label>
                    <select name="brand" className="form-control" onChange={getSelected}>
                    <option value="All" className="pl-3">All</option>
                        {
                          brand.map((item,index)=>{
                            return <option key={index} value={item.name} className="pl-3">{item.name}</option>
                          })
                        }
                        </select>
                    </div>

               <div className="dropdown mr-1 ml-md-auto" style={{width:"25%"}}>
               <label className="bg-secondary text-light text-center p-2 w-100">Sort By</label>
               <select name="sortby" className="form-control w-100 " onChange={getSort}>
              <optgroup label="Choose Any Option">
              <option value="latest">Latest</option>
                <option value="ltoh">Price, Low to High</option>
                <option value="htol">Price, High to Low"</option>
              </optgroup>
               </select>
               </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                {shopproducts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-4  col-12 mb-4"
                      data-aos="fade-up"
                    >
                      <div className="block-4 text-center border">
                        <figure className="block-4-image">
                          <Link to={`/single-product/${item.id}`}>
                            <img
                              className="w-100"
                              src={`assets/productimages/${item.pic1}`}
                              height="270px"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="block-4-text p-4">
                          <h3
                            className="text-dark font-weight-bold"
                            style={{ color: "black", height: "55px" }}
                          >
                            {item.name}
                          </h3>
                          <h3 className="mb-0 font-weight-bold">
                            {" "}
                            <del className="text-danger">
                              ${item.baseprice}{" "}
                            </del>{" "}
                            <sup>{item.finalprice}</sup>
                          </h3>
                          <p className="text-primary text-dark font-weight-bold">
                            Discount {item.discount}%
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li>
                        <Link to="#">&lt;</Link>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                      <li>
                        <Link to="#">5</Link>
                      </li>
                      <li>
                        <Link to="#">&gt;</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value="0-999" />&nbsp;&nbsp;&nbsp; ₹0 - ₹999 <br />
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value="1000-1999" />&nbsp;&nbsp;&nbsp; ₹1000 - ₹1999 <br />
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value="2000-2999" />&nbsp;&nbsp;&nbsp; ₹2000 - ₹2999 <br />
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value="3000-3999" />&nbsp;&nbsp;&nbsp; ₹3000 - ₹3999 <br />
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value="4000-4999" />&nbsp;&nbsp;&nbsp; ₹4000 - ₹4999  <br />
                 <input type="radio" name="amount" id="amount" onChange={getPriceFilter} value=">5000" />&nbsp;&nbsp;&nbsp; {">"} ₹5000
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Size
                  </h3>
                  <label htmlFor="sm" className="d-flex">
                    <input type="radio" id="sm" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="SM" />
                    <span className="text-black">Small</span>
                  </label>
                  <label htmlFor="md" className="d-flex">
                    <input type="radio" id="md" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="MD" />
                    <span className="text-black">Medium </span>
                  </label>
                  <label htmlFor="lg" className="d-flex">
                    <input type="radio" id="lg" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="LG" />
                    <span className="text-black">Large</span>
                  </label>
                  <label htmlFor="xl" className="d-flex">
                    <input type="radio" id="xl" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="XL" />
                    <span className="text-black">Extra Large</span>
                  </label>
                  <label htmlFor="xxl" className="d-flex">
                    <input type="radio" id="xxl" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="XXL" />
                    <span className="text-black">Extra Extra Large</span>
                  </label>
                  <label htmlFor="24" className="d-flex">
                    <input type="radio" id="24" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="24" />
                    <span className="text-black">24</span>
                  </label>
                  <label htmlFor="26" className="d-flex">
                    <input type="radio" id="26" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="26" />
                    <span className="text-black">26</span>
                  </label>
                  <label htmlFor="28" className="d-flex">
                    <input type="radio" id="28" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="28" />
                    <span className="text-black">28</span>
                  </label>
                  <label htmlFor="30" className="d-flex">
                    <input type="radio" id="30" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="30" />
                    <span className="text-black">30</span>
                  </label>
                  <label htmlFor="32" className="d-flex">
                    <input type="radio" id="32" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="32" />
                    <span className="text-black">32</span>
                  </label>
                  <label htmlFor="34" className="d-flex">
                    <input type="radio" id="34" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="34" />
                    <span className="text-black">34</span>
                  </label>
                  <label htmlFor="36" className="d-flex">
                    <input type="radio" id="36" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="36" />
                    <span className="text-black">36</span>
                  </label>
                  <label htmlFor="38" className="d-flex">
                    <input type="radio" id="38" onChange={getSizeFilter} className="mr-2 mt-1" name="size" value="38" />
                    <span className="text-black">38</span>
                  </label>
                </div>

              
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
