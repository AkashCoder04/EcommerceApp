import React , {useEffect} from "react";
import LeftNav from "./LeftNav";
import {Link,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import {getProduct,deleteProduct} from '../../Store/ActionCreators/ProductActionCreators'
import { DataGrid } from "@mui/x-data-grid";
import {useSelector,useDispatch} from 'react-redux'


export default function Product() {
  var product = useSelector((state)=>state.ProductStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()
  var rows = []
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "maincategory", headerName: "Maincategory", width: 110 },
    { field: "subcategory", headerName: "Subcategory", width: 110 },
    { field: "brand", headerName: "Brand", width: 120 },
    { field: "color", headerName: "Color", width: 90 },
    { field: "size", headerName: "Size", width: 60 },
    { field: "baseprice", headerName: "Base Price", width: 100 },
    { field: "discount", headerName: "Discount", width: 70 },
    { field: "finalprice", headerName: "Final Price", width: 90 },
    { field: "stoke", headerName: "Stoke", width: 90 },
    { field: "pic1", headerName: "Pic1", width: 70, renderCell: ({row}) => <img src={`assets/productimages/${row.pic1}`}  height="50px" width="100%" alt="" className="rounded" /> },
    { field: "pic2", headerName: "Pic2", width: 70 , renderCell: ({row}) => <img src={`assets/productimages/${row.pic2}`} height="50px" width="100%" alt="" className="rounded" />},
    { field: "pic3", headerName: "Pic3", width: 70 , renderCell: ({row}) => <img src={`assets/productimages/${row.pic3}`} height="50px" width="100%" alt="" className="rounded" /> },
    { field: "pic4", headerName: "Pic4", width: 70 , renderCell: ({row}) => <img src={`assets/productimages/${row.pic4}`} height="50px" width="100%" alt="" className="rounded" /> },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({row}) =>
        <Button onClick={()=>{
          navigate("/admin-update-product/"+row.id)
        }}>
        <i className="bi bi-pen-fill"></i>
        </Button>
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({row}) =>
        <Button onClick={()=>dispatch(deleteProduct({id:row.id}))}>
        <i className="bi bi-trash-fill"></i>
        </Button>
    }
  ];
  for(let item of product){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getProduct())
  
      },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <LeftNav />
          </div>
          <div className="col-md-9 col-12">
            <h4 className="text-center p-3">Product  <Link to = "/admin-add-product"><i className="bi bi-plus-circle float-right"></i></Link></h4>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
