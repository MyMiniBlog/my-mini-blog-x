import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logout(){
    const onButtonClick=()=> {
        window.location.href = 'https://github.com/logout';
        localStorage.removeItem('isLoggedIn');
        // Redirect the user to the login page or home page
        window.location.href = '/';
    }

    return(
        <div>
            <button onClick={onButtonClick}><FontAwesomeIcon icon={faGithub} /> Logout</button>
        </div>
    )
}
export default Logout; 