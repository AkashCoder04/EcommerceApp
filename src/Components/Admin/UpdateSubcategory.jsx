import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import { useSelector } from "react-redux";
import {
  updateSubcategory
} from "../../Store/ActionCreators/SubcategoryActionCreators";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateSubcategory() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const subcategory = useSelector((state) => state.SubcategoryStateData);
  function getData(e) {
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    var data = subcategory.find((item)=>item.name===name)
    if(data){
        alert("Subcategory name is already exist!!")
    }
    else{
        dispatch(updateSubcategory({ id:id,name:name }));
        navigate("/admin-subcategory");
    }
   
  }
  useEffect(() => {
    var subcat = subcategory.find((item)=>item.id===Number(id))
    setName(subcat.name);
  },[]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <LeftNav />
          </div>
          <div className="col-md-9 col-12">
            <h4 className="text-center p-3">Sub_Category</h4>
            <form onSubmit={postData}>
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="name" className="text-black">
                      SubCategory Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Subcategory Name :"
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
