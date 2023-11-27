import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import { useSelector } from "react-redux";
import {
  addBrand,
  updateBrand
} from "../../Store/ActionCreators/BrandActionCreators";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateBrand() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const brand = useSelector((state) => state.BrandStateData);
  function getData(e) {
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    var data = brand.find((item)=>item.name===name)
    if(data){
        alert("Brand name is already exist!!")
    }
    else{
        dispatch(updateBrand({ id:id,name:name }));
        navigate("/admin-brand");
    }
   
  }
  useEffect(() => {
    var brands = brand.find((item)=>item.id==Number(id))
    setName(brands.name);
  },[]);

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
                    <label htmlFor="name" className="text-black">
                      Brand Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Brand Name :"
                      onChange={getData}
                      required
                      className="form-control"
                      value={name}
                      id="name"
                      name="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Update
                    </button>
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
