import React, {useState} from "react";
import LeftNav from "./LeftNav";

import {addBrand} from '../../Store/ActionCreators/BrandActionCreators'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function AddBrand() {
  var brand = useSelector((state)=>state.BrandStateData)
    const [name,setName]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function getData(e){
        setName(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var brands = brand.find((item)=>item.name===name)
        if(brands)
        alert("Brand already Exist!!")
        else{
          dispatch(addBrand({name}))
          navigate('/admin-brand')
      
        }
    }
   
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <LeftNav />
          </div>
          <div className="col-md-9 col-12">
            <h4 className="text-center p-3">Brand</h4>
            <form onSubmit={postData}>
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="name" className="text-black">Brand Name <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Enter Brand Name :" onChange={getData} required className="form-control"  id="name" name="name"/>
                  </div>
                </div>
              
                <div className="form-group row">
                  <div className="col-lg-12">
                   <button type="submit" className="btn btn-primary btn-lg btn-block">Add</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
