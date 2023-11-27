import React, {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getUser} from '../Store/ActionCreators/UserActionCreators'
export default function Login() {
    let [data,setdata] = useState({
        username:"",
        password:""
    })
    var [show,setshow]= useState(false)
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
        var d = user.find((item)=>item.username===data.username && item.password===data.password)
     if(d){
      localStorage.setItem("login",true)
      localStorage.setItem("name",d.name)
      localStorage.setItem("username",d.username)
      localStorage.setItem("password",d.password)
      localStorage.setItem("userid",d.id)
      
      navigate("/profile")
     }else{
       setshow(true)
     }
    }
    useEffect(()=>{
      dispatch(getUser())
  },[])
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-3 col-2"></div>
        <div className="col-md-6 col-8">
<h4 className="text-center p-2 border">Login to Your Account</h4>
{
  show?<div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
 Invalid Username or Password !!
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>:""
}
            <form onSubmit={postData}>
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">

                    <label htmlFor="username" className="text-black">User Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" required id="username" onChange={getData} placeholder="Enter Your User Name" name="username"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required id="password" onChange={getData} name="password" placeholder="Enter Your Password"/>
                  </div>
                </div>
                
                <div className="form-group row">
                <div className="col-lg-6">
                    <input type="checkbox"  className="fs-5" /> Remember Me
                  </div>
                  <div className="col-lg-6">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Login"/>
                  </div>
                </div>
                <p className="p-1 text-center">----OR----</p>
                <div className="form-group row">
                <div className="col-lg-6">
                <input type="button" className="btn btn-primary btn-lg btn-block bg-primary border-0" value="Sign in using Facebook"/>
                  </div>
                  <div className="col-lg-6">
                    <input type="button" className="btn btn-primary btn-lg btn-block bg-danger border-0" value="sign in using google +"/>
                  </div>
                </div>
                <div className="form-bottom-links mt-4" style={{display:"flex",justifyContent:"space-between"}}>
                <Link className="text-decoration-none text-secondary" to="#">Forgot Password ?</Link>
                <Link className="text-decoration-none text-secondary" to="/signup">Don't have an Account? <br/><span className="pl-3"> Please Sign Up! </span></Link>
              </div>
              </div>
              
            </form>
          </div>
        <div className="col-md-3 col-2"></div>
      </div>
    </>
  )
}
