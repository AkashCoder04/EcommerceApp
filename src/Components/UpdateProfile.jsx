import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {updateUser,getUser} from '../Store/ActionCreators/UserActionCreators'
export default function UpdateProfile() {
    let [data,setdata] = useState({
        name:"",
        pic:"",
        email:"",
        phone:"",
        addressline1:"",
        addressline2:"",
        addressline3:"",
        Pin:"",
        city:"",
        state:""
    })

    var user = useSelector((state)=>state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
   function getData(e){
        var name=e.target.name
        var value=e.target.value
       setdata((old)=>{
        return{
            ...old,
            [name]:value
        }
       })
    }

    function getFile(e){
        var name=e.target.name
        var value=e.target.files[0].name
       setdata((old)=>{
        return{
            ...old,
            [name]:value
        }
       })
    }

    function postData(e){
        e.preventDefault()
            var item = {
                name:data.name,
                pic:data.pic,
                email:data.email,
                phone:data.phone,
                addressline1:data.addressline1,
                addressline2:data.addressline2,
                addressline3:data.addressline3,
                pin:data.pin,
                city:data.city,
                password:data.password,
                state:data.state,
                username:data.username,
                role:data.role,
                id:data.id
            }
            dispatch(updateUser(item))
            navigate("/profile")
        
        
    }
    useEffect(()=>{
        dispatch(getUser())
        var data = user.find((item)=>item.id===Number(localStorage.getItem("userid")))
        if(data)
        setdata(data)
    },[user.length])
  return (
    <>
     
        <div className="container">
<h4 className="text-center p-2 border">Update your Profile </h4>

            <form onSubmit={postData}>
              
              <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="name" className="text-black">Full Name</label>
                    <input type="text" className="form-control" id="name"  onChange={getData} placeholder="Enter Your Full Name" name="name" value={data.name} />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic" className="text-black">Pic</label>
                    <input type="file" className="form-control" id="pic"  onChange={getFile} placeholder="Upload a Pic" name="pic"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="email" className="text-black"> Email Address</label>
                    <input type="text" className="form-control" id="email" required onChange={getData} placeholder="Enter Your Email Address " name="email"  value={data.email}  />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="phone" className="text-black">Phone Number </label>
                    <input type="text" className="form-control" id="phone"  onChange={getData} placeholder="Enter Your Phone Number" name="phone"  value={data.phone}/>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="addressline1" className="text-black">  Address Line 1</label>
                    <input type="text" className="form-control" id="addressline1"  onChange={getData} placeholder="Enter House, Floor or Building Number " name="addressline1"  value={data.addressline1}/>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="addressline2" className="text-black">Address Line 2</label>
                    <input type="text" className="form-control" id="addressline2"  onChange={getData} placeholder="Enter Street Number or Near By" name="addressline2"  value={data.addressline2} />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="addressline3" className="text-black">  Address Line 3</label>
                    <input type="text" className="form-control" id="addressline3" onChange={getData} placeholder="Enter Village or Locality " name="addressline3"  value={data.addressline3} />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="pin" className="text-black">Pin Code </label>
                    <input type="text" className="form-control" id="pin" required onChange={getData} placeholder="Enter Your Pin Code" name="pin"  value={data.pin} />
                  </div>
                </div>

                
                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="city" className="text-black"> City Name</label>
                    <input type="text" className="form-control" id="city" onChange={getData} placeholder="Enter Your City Name " name="city"  value={data.city} />
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="state" className="text-black">State Name </label>
                    <input type="text" className="form-control" id="state" onChange={getData} placeholder="Enter Your State Name" name="state"  value={data.state} />
                  </div>
                </div>
               
                
                <div className="form-group row">
              
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Update Profile"/>
                  </div>
                </div>
              </div>
              
            </form>
          </div>
       
    </>
  )
}
