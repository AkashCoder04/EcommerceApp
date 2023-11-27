import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCart, updateCart,deleteCart } from "../Store/ActionCreators/CartActionCreators";
export default function Cart() {
  var [cart,setCart]=useState([])
  var carts = useSelector((state) => state.CartStateData);
  var dispatch = useDispatch();
 
  function getAPIData() {
    dispatch(getCart());
    setCart(carts.filter((item)=>item.userid===localStorage.getItem("userid")))
  }
  function deleteRecord(id){
    dispatch(deleteCart({id:id}))
    getAPIData()
  }
  function updateRecord(id,op){
    var item = cart.find((item)=>item.id===id)
    if(op==="dec" && item.qty===1)
    return
    else if(op==="dec"){
      item.qty = item.qty-1
      item.total = item.total-item.price
    }
    else{
      item.qty = item.qty+1
      item.total = item.total+item.price
    }
    dispatch(updateCart(item))
    getAPIData()
  }
  useEffect(() => {
    getAPIData()
  }, [carts.length]);
  return (
    <>
    
    <div className="mt-5">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-name">Color</th>
                    <th className="product-name">Size</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity" style={{width:"150px"}}>Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item,index)=>{
                      return <tr key={index}>
                    <td className="product-thumbnail">
                      <img src={`/assets/productimages/${item.pic}`} alt="" height="120px" width="100px" className="rounded"/>
                    </td>
                    <td className="product-name">
                      <h2 className="h6 text-black">{item.name}</h2>
                    </td>
                    <td className="product-color">
                      <h2 className="h6 text-black">{item.color}</h2>
                    </td>
                    <td className="product-size">
                      <h2 className="h6 text-black">{item.size}</h2>
                    </td>
                    <td>₹{item.price}</td>
                    <td style={{width:"150px!important"}}>
                      <div className="input-group mb-2 d-flex" style={{width: "120px"}}>
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-primary" onClick={()=>updateRecord(item.id,"dec")} type="button"> - </button>
                        </div>
                        <span>&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;</span>
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" onClick={()=>updateRecord(item.id,"inc")} type="button"> + </button>
                        </div>
                      </div>

                    </td>
                    <td>₹{item.total}</td>
                    <td> <div className="input-group-append">
                          <button className="btn btn-outline-primary" type="button" onClick={()=>deleteRecord(item.id)}>Remove</button>
                        </div></td>
                  </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-sm">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">$230.00</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">$230.00</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                  <Link to="/checkout" className="btn btn-primary btn-sm my-3 py-3 btn-block">Proceed To Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}
