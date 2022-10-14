import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Contact(){
    const navigate=useNavigate()
    const location=useLocation()

    let clickEv=()=>{
        navigate('/about');

    }
console.log(location.state);

    return(
        <div>
            <h1>Contact{}location.state.name</h1>
            <button onClick={clickEv}>click me</button>
        </div>
    )
}
export default Contact;