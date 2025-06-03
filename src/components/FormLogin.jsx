import { PostLogin } from "../routers/public/requests/post/PostLogin";
import { useState } from 'react';

function Login(props) {

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userLoginRequestDto = {
            nickname,
            password
        }
        const response = await PostLogin(userLoginRequestDto);
        
        /*
        const decoded = jwtDecode(response.token);
        console.log(decoded.role);
        */

    }
    return (
        <div>
            
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
            Login
        </button>
        
        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="nickname" className="col-form-label">Nickname:</label>
                    <input type="text" className="form-control" id="nickname" onChange={(e) => setNickname(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-form-label">Password:</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}
export default Login;