import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import { useSelector } from "react-redux";
import {
  addMaincategory,
  updateMaincategory,
  getSingleMaincategory,
} from "../../Store/ActionCreators/MaincategoryActionCreators";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateMaincategory() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const maincategory = useSelector((state) => state.MaincategoryStateData);
  //console.log(maincategory)
  function getData(e) {
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    var data = maincategory.find((item)=>item.name===name)
    if(data){
        alert("Maincategory name is already exist!!")
    }
    else{
        dispatch(updateMaincategory({ id:id,name:name }));
        navigate("/admin-maincategory");
    }
   
  }
  useEffect(() => {
    var maincat = maincategory.find((item)=>item.id==Number(id))
    setName(maincat.name);
  },[]);

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
                    <label htmlFor="name" className="text-black">
                      MainCategory Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Maincategory Name :"
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
