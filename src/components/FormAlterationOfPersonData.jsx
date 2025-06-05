import { GetReturnPayload } from "../routers/private/requests/get/GetReturnPayload";
import { useState, useEffect } from "react";
import { PutUpdateUser } from "../routers/private/requests/put/PutUpdateUser";
import { useNavigate } from 'react-router-dom';
import { useUser } from "./contexts/UserContextGlobal";
function AlterationOfPersonData(){
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {getUser, setUser} = useUser();

    useEffect(() => {
        const user = getUser();
        if (!user) { 
            navigate('/home');
            return;
        }
    
        setName(user.name);
        setNickname(user.nickname);
        setEmail(user.email);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            nickname,
            email,
        };
        setUser(user);
        PutUpdateUser(user);
    }
    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div class="col-md-6">
                <label for="inputName" class="form-label">Name</label>
                <div className="d-flex">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="inputName" 
                    placeholder="Name" 
                    value={name ?? ''}
                    onChange={e => setName(e.target.value)}/>

                </div>
            </div>

            <div class="col-md-8">
                <label for="inputNickname" class="form-label">Nickname</label>
                <div className="d-flex">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="inputNickname" 
                    placeholder="Nickname"
                    value={nickname ?? ''}
                    disabled
                    />
                </div>
            </div>

            <div class="col-md-6">
                <label for="inputEmail" class="form-label">Email</label>
                <div className="d-flex">
                    <input 
                    type="email" 
                    class="form-control" 
                    id="inputEmail" 
                    placeholder="E-mail"
                    value={email ?? ''}
                    onChange={e => setEmail(e.target.value)} />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}>Update</button>
            </form>
        </div>
    );
}
export default AlterationOfPersonData;