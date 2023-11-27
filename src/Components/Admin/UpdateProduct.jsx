import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import { useSelector, useDispatch } from "react-redux";
import {updateProduct} from "../../Store/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../../Store/ActionCreators/BrandActionCreators";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateProduct() {
  const [data, setdata] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    stoke: "In Stoke",
    description: "This is a Sample Product",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
  });
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) => state.ProductStateData);
  var maincategory = useSelector((state) => state.MaincategoryStateData);
  var subcategory = useSelector((state) => state.SubcategoryStateData);
  var brand = useSelector((state) => state.BrandStateData);
   
  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setdata((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function getFile(e) {
    var name = e.target.name;
    var value = e.target.files[0].name;
    setdata((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  async function postData(e) {
    e.preventDefault();
    var fp = data.baseprice-data.baseprice*data.discount/100
    var item = {
      id:id,
      name:data.name,
      maincategory:data.maincategory,
      subcategory:data.subcategory,
      brand:data.brand,
      color:data.color,
      size:data.size,
      baseprice:data.baseprice,
      discount:data.discount,
      finalprice:fp,
      stoke:data.stoke,
      description:data.description,
      pic1:data.pic1,
      pic2:data.pic2,
      pic3:data.pic3,
      pic4:data.pic4
    }
    dispatch(updateProduct(item))
    navigate("/admin-product")
  
   
  }
  useEffect(() => {
    setdata(product.find((item)=>item.id===Number(id)));
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
  },[]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <LeftNav />
          </div>
          <div className="col-md-9 col-12">
            <h4 className="text-center p-3">Product</h4>
            <form onSubmit={postData}>
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="name" className="text-black">
                      Product Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Name :"
                      onChange={getData}
                      value={data.name}
                      required
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="maincategory" className="text-black">
                      Maincategory<span className="text-danger">*</span>
                    </label>
                    <select name="maincategory" className="form-control"  onChange={getData}>
                      {maincategory.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item.name}
                            selected={data.maincategory===item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="subcategory" className="text-black">
                      Subcategory<span className="text-danger">*</span>
                    </label>
                    <select name="subcategory" className="form-control" onChange={getData}>
                      {subcategory.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item.name}
                            selected={data.subcategory===item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="brand" className="text-black">
                      Brand<span className="text-danger">*</span>
                    </label>
                    <select name="brand" className="form-control" onChange={getData}>
                      {brand.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item.name}
                            selected={data.brand===item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="stoke" className="text-black">
                      Stoke<span className="text-danger">*</span>
                    </label>
                    <select name="stoke" className="form-control">
                      <option value="In Stoke"  selected={data.stoke==="In Stoke"}>In Stoke</option>
                      <option value="Out Of Stoke" selected={data.stoke==="Out Of Stoke"}>Out Of Stoke</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="color" className="text-black">
                      Color Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Color Name :"
                      onChange={getData}
                      required
                      className="form-control"
                      value={data.color}
                      id="color"
                      name="color"
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="size" className="text-black">
                      Size <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Size Name :"
                      onChange={getData}
                      required
                      value={data.size}
                      className="form-control"
                      id="size"
                      name="size"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="baseprice" className="text-black">
                      Base Price <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Base Price :"
                      onChange={getData}
                      required
                      value={data.baseprice}
                      className="form-control"
                      id="baseprice"
                      name="baseprice"
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="discount" className="text-black">
                      Discount <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Discount :"
                      onChange={getData}
                      value={data.discount}
                      required
                      className="form-control"
                      id="discount"
                      name="discount"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="text-black">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    onChange={getData}
                    className="form-control"
                    rows="5"
                    value=  {data.description}
                  >
                  
                  </textarea>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic1"  className="text-black">
                      Pic1
                    </label>
                    <input
                      type="file"
                      name="pic1"
                      id="pic1"
                      onChange={getFile}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic2"  className="text-black">
                      Pic2
                    </label>
                    <input
                      type="file"
                      name="pic2"
                      onChange={getFile}
                      id="pic2"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic3"  className="text-black">
                      Pic3
                    </label>
                    <input
                      type="file"
                      onChange={getFile}
                      name="pic3"
                      id="pic3"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic4"  className="text-black">
                      Pic4
                    </label>
                    <input
                      type="file"
                      onChange={getFile}
                      name="pic4"
                      id="pic4"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
