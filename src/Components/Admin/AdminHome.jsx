import React from 'react'
import {Link} from 'react-router-dom'
import LeftNav from './LeftNav'
export default function AdminHome() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-3 col-12">
        <LeftNav/>
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-5 mt-4">
              <img src="assets/images/person_4.jpg" className="rounded-circle" height="420px" alt="" />
            </div>
            <div className="col-md-7 mt-5 pl5">
              <table className="table table-bordered h-100">
                <tbody>
                <tr>
                <th>Name </th>
                <td>Krishna Chauhan</td>
                </tr>
               
                <tr>
                <th>User Name </th>
                <td>Admin</td>
                </tr>
                <tr>
                <th>Email Address</th>
                <td>krishnachauhan@12345gmail.com</td>
                </tr>
                <tr>
                <th>Phone Number </th>
                <td>8445 9988 71</td>
                </tr>
                <tr>
                <th colSpan={2}><Link to="#" className="btn btn-primary btn-lg btn-block">Update Profile</Link></th>
                
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
     </div>
    </div>
    </>
  )
}
