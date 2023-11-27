import React , {useEffect} from "react";
import LeftNav from "./LeftNav";
import {Link,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import {getMaincategory,deleteMaincategory} from '../../Store/ActionCreators/MaincategoryActionCreators'
import { DataGrid } from "@mui/x-data-grid";
import {useSelector,useDispatch} from 'react-redux'


export default function Maincategory() {
  var maincategory = useSelector((state)=>state.MaincategoryStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()
  var rows = []
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({row}) =>
        <Button onClick={()=>{
          navigate("/admin-update-maincategory/"+row.id)
        }}>
        <i className="bi bi-pen-fill"></i>
        </Button>
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({row}) =>
        <Button onClick={()=>dispatch(deleteMaincategory({id:row.id}))}>
        <i className="bi bi-trash-fill"></i>
        </Button>
    }
  ];
  for(let item of maincategory){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getMaincategory())
      },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <LeftNav />
          </div>
          <div className="col-md-9 col-12">
            <h4 className="text-center p-3">Main_Category  <Link to = "/admin-add-maincategory"><i className="bi bi-plus-circle float-right"></i></Link></h4>
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
