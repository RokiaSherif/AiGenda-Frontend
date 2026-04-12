import { Link } from "react-router-dom";
import "./logsign.css";
const FormBottomSec = ({show, title, theLink, theLinkTitle})=>{
    return(
        <>
          {show && 
          <>
          <div id="line">Or</div>
            <div className="icons">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg"/>
                <i className="fa-brands fa-facebook" style={{color:'#1877f2'}}></i>
                <i className="fa-brands fa-github"></i>
            </div>
            </>
            }
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',alignSelf:"center",gap:'2px',margin:'10px 0 0'}}>
                <p>{title} </p>
                <Link to={`/${theLink}`}><span style={{cursor:"pointer"}}>{theLinkTitle} </span></Link>
            </div>
            <div className="services">
                <p>Terms & Conditions</p>
                <p>Support</p>
                <p>Customer Care</p>
            </div>
        </>
    )
}
export default FormBottomSec;