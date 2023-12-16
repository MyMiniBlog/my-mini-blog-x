import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Login() {
   
  const onButtonClick=()=> {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv1.52634c192ad72a17';
}

    return (
      <div>
         <button onClick={onButtonClick}><FontAwesomeIcon icon={faGithub} /> Login</button> 
      </div>
    );
   }
   
   export default Login;