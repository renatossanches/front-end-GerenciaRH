import { useUser } from "../contexts/UserContextGlobal";
import CreateDepartment from "../FormCreateDepartment";
import CreateEnterprise from "../FormCreateEnterprise";
import CreateUser from "../FormCreateUser";
import Login from "../FormLogin";
import { Link } from "react-router-dom";

const Header = () => {
    const {getUser, setUser}= useUser();
    const user = getUser();
    return(
    <div>
    <header className="p-3 mb-3 border-bottom"> 
    <div className="container"> 
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
            
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" />
            </Link>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                    <li><Login/></li>
                    <li><CreateEnterprise/></li>
                    <li><CreateDepartment/></li>
                    <li><CreateUser/></li>
                    <li><Link to="/tools" className="nav-link px-2 link-body-emphasis">Tools</Link></li>
                
                </ul> <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"> 
                    <input type="search" classNam="form-control" placeholder="Search..." aria-label="Search"/> 
                    </form> 

                    <div className="dropdown text-end">
                            <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://raw.githubusercontent.com/renatossanches/front-end-GerenciaRH/refs/heads/main/public/userdefault.webp" alt="mdo" width="32" height="32" className="rounded-circle" />
                                {user ? <p>{user.name}</p> : <p>Loading...</p>}                            
                                </Link>

                            <ul className="dropdown-menu text-small" >
                                <Link to="" className="dropdown-item">Settings</Link> 
                                <Link to="/profile" className="dropdown-item">Profile</Link> 
                                <Link to="/" className="dropdown-divider"></Link>
                                <Link to="/home" 
                                
                                onClick={() => localStorage.removeItem('authToken')} className="dropdown-item">Sign out</Link>   
                            </ul> 
                    </div> 
            </div> 
        </div> 
        </header>
        </div>
    )
}
export default Header;