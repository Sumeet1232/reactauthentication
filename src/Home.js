import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home=() =>{
    const usenavigate=useNavigate();
    useEffect(()=>{
        let username =sessionStorage.getItem('username');
        if(username===''||username===null){
            usenavigate('/login');
        }
    },[]);
    return(
        <div>
            <div className="header">
               <h5><Link style={{float:'left'}} to={'/'}>Home</Link>
                <Link style={{float:'right'}} to={'/login'}>Logout</Link></h5>

            </div>
            <h1>Welcome to SB technologies</h1>
            
        </div>
    )
}

export default Home;