import React, {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getUser} from '../Store/ActionCreators/UserActionCreators'
export default function Profile() {
  var [user,setuser] = useState({})
  var users = useSelector((state)=>state.UserStateData)
  
  var dispatch = useDispatch()
  var navigate = useNavigate()


  useEffect(()=>{
    dispatch(getUser())
    var data = users.find((item)=>item.id===Number(localStorage.getItem("userid")))
    if(data)
    setuser(data)
},[users.length])
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-6">
            {
              user.pic?
              <img src={`/assets/productimages/${user.pic}`} height="650px" width="100%" alt="" />:
              <img src={`/assets/images/noimage.png`} height="650px" width="100%" alt="" />
            }
          </div>
          <div className="col-md-6">
          <h3 className="text-center p-2 border">Buyer Profile Section</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <th>Address Line1</th>
                  <td>{user.addressline1}</td>
                </tr>
                <tr>
                  <th>Address Line2</th>
                  <td>{user.addressline2}</td>
                </tr>
                <tr>
                  <th>Address Line3</th>
                  <td>{user.addressline3}</td>
                </tr>
                <tr>
                  <th>PINCODE</th>
                  <td>{user.pin}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>{user.state}</td>
                </tr>
                <tr>
                 
                  <th colSpan={2}><Link to="/update-profile" className="btn btn-primary w-100 btn-sm"> Update Profile </Link></th>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
