import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register=() =>{

    const[id,idchange] = useState("");
    const[name,namechange] = useState("");
    const[password,passwordchange] = useState("");
    const[email,emailchange] = useState("");
    const[phone,phonechange] = useState("");
    const[country,countrychange] = useState("India");
    const[gender,genderchange] = useState("male");

    const navigate=useNavigate();

    const IsValidate=()=>{
        let isproceed=true;
        let errormessage='Please enter the value in ';
        if(id===null || id===''){
            isproceed=false;
            errormessage += 'Username';
        }
        if(!isproceed){
            toast.warning(errormessage)
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }
            else{
                isproceed=false;
                toast.warning('Please enter valid email');
            }
        }
        return isproceed;
    }

    const handlesubmit=(e)=>{   
        e.preventDefault();
        if(IsValidate()){
        let regobj={id,name,password,email,phone,country,gender};
        // console.log(regobj);

        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registered Successfully.')
            navigate('/login');
        }).catch((err)=>{
            toast.error('Failed:'+err.message);
        });
    }
    }
    return(
        <><div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Registration Page</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label> User Name<span className="errmsg">*</span></label>
                                    <input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password<span className="errmsg">*</span></label>
                                    <input value={password} onChange={e=>passwordchange(e.target.value)} type='password' className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label> Full Name<span className="errmsg"></span></label>
                                    <input value={name} onChange={e=>namechange(e.target.value)}className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email<span className="errmsg"></span></label>
                                    <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone<span className="errmsg"></span></label>
                                    <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Country<span className="errmsg"></span></label>
                                    <select value={country} onChange={e=>countrychange(e.target.value)} className="form-control">
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio"  onChange={e=>genderchange(e.target.value)} name="gender" className="app-check"></input>
                                    <label>Male</label>
                                    <input type="radio"  onChange={e=>genderchange(e.target.value)} name="gender" className="app-check"></input>
                                    <label>Female</label>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <a className="btn btn-danger">Back</a>
                    </div>

                </div>
            </form>
        </div><div>

            </div></>
    )
}

export default Register;