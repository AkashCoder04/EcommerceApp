import React, {useState} from "react";
import LeftNav from "./LeftNav";

import {addMaincategory} from '../../Store/ActionCreators/MaincategoryActionCreators'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function AddMaincategory() {
  var maincategory = useSelector((state)=>state.MaincategoryStateData)
    const [name,setName]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function getData(e){
        setName(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var maincat = maincategory.find((item)=>item.name===name)
        if(maincat)
        alert("Maincategory already Exist!!")
        else{
          dispatch(addMaincategory({name}))
          navigate('/admin-maincategory')
      
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
            <h4 className="text-center p-3">Main_Category</h4>
            <form onSubmit={postData}>
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="name" className="text-black">MainCategory Name <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Enter Maincategory Name :" onChange={getData} required className="form-control" id="name" name="name"/>
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
