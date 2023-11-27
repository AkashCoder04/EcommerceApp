import React, {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {ragisterUser,getUser} from '../Store/ActionCreators/UserActionCreators'
export default function Signup() {
    let [data,setdata] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    })
    var [show,setshow]= useState(false)
    var [msg,setmsg]= useState("")

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
    function postData(e){
        e.preventDefault()
        if(data.password===data.cpassword){
           var item = user.find((item)=>item.username===data.username)
           if(item){
            setshow(true)
            setmsg("UserName Already Taken !!! ")
           }
       
           else{
            var item = {
              name : data.name,
              username : data.username,
              email : data.email,
              phone : data.phone,
              password : data.password,
              role : "User"
            }
            dispatch(ragisterUser(item))
            navigate("/login")
           }
        }else{
          setshow(true)
            setmsg("Password And Confirm password doesn't Matched!!!!!!")
        }
    }
    useEffect(()=>{
        dispatch(getUser())
    },[])
  return (
    <>
     
        <div className="container">
<h4 className="text-center p-2 border">Create a Free Account </h4>
{
  show?<div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
 {msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>:""
}
            <form onSubmit={postData}>
              
              <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="name" className="text-black">Full Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" required onChange={getData} placeholder="Enter Your Full Name" name="name"  minLength={3}/>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="username" className="text-black">User Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="username" required onChange={getData} placeholder="Enter Your User Name" name="username"  minLength={3}/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="email" className="text-black"> Email Address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="email" required onChange={getData} placeholder="Enter Your Email Address " name="email"  minLength={11}/>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="phone" className="text-black">Phone Number <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="phone" required onChange={getData} placeholder="Enter Your Phone Number" name="phone"  minLength={10}/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required id="password" onChange={getData} name="password" placeholder="Enter Your Password"  minLength={8}/>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="cpassword" className="text-black">Confirm Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required id="cpassword" onChange={getData} name="cpassword" placeholder="Enter Your Confirm Password" minLength={8}/>
                  </div>
                </div>
                
                <div className="form-group row">
                <div className="col-lg-6">
                    <input type="checkbox"  className="fs-5" /> I agree to the <span className="text-primary">terms</span>
                  </div>
                  <div className="col-lg-6">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="SignUp"/>
                  </div>
                </div>
                <p className="p-1 text-center">----OR----</p>
                <div className="form-group row">
                <div className="col-lg-6">
                <input type="button" className="btn btn-primary btn-lg btn-block bg-primary border-0" value="Sign up using Facebook"/>
                  </div>
                  <div className="col-lg-6">
                    <input type="button" className="btn btn-primary btn-lg btn-block bg-danger border-0" value="sign up using google +"/>
                  </div>
                </div>
                <div className="form-bottom-links mt-4 ">
                <Link className="text-decoration-none text-secondary" to="/login">If you have already  an account. Just Login.</Link>
              </div>
              </div>
              
            </form>
          </div>
       
    </>
  )
}
