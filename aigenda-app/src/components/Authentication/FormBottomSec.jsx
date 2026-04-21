import { Link } from "react-router-dom";
import "./logsign.css";
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogleIdToken } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const FormBottomSec = ({show, title, theLink, theLinkTitle})=>{
    const navigate = useNavigate();
    const handleSuccess = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;
      if (!idToken) throw new Error('Missing Google credential');

      // send idToken to backend for verification and login
      const auth = await loginWithGoogleIdToken(idToken);

      // save tokens in localStorage
      localStorage.setItem('access_token', auth.token);
      localStorage.setItem('refresh_token', auth.refreshToken);

      console.log('Logged in:', auth.email);
      Swal.fire('Success', 'You are logged in successfully', 'success').then(() => {
        navigate('/home');
      });
    } catch (e) {
      console.error(e);
      Swal.fire('Error', 'An error occurred while logging in', 'error');
    }
  };
    return(
        <>
          {show && 
          <>
          <div id="line">Or</div>
            <div className="icons">
                <GoogleLogin
                onSuccess={handleSuccess}
                  onError={() => console.log('Login Failed')}
                  theme="outline" 
                  shape="pill"
                  text="continue_with"
                  locale="en"         
                  size="large"
                  width="300"
                  logo_alignment="center"
                />
               {/* <div onClick={()=>{}}><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" /></div> */}
               {/* <div><img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" style={{borderRadius:'10px'}}/></div> */}
                {/* <div><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub logo" /></div> */}
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