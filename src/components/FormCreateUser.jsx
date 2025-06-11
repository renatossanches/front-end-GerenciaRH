import { useState } from "react";
import { PostCreateUser } from "../routers/private/requests/post/PostCreateUser";
import { GetFindAllDepartments } from "../routers/private/requests/get/GetFindAllDepartments";
import { useEffect } from "react";
function CreateUser() {
    const [name, setName] = useState('');
    const [contractDate, setContractDate] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [salario, setSalario] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [role, setRole] = useState('');
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
      const fetchDepartments = async () => {
        const data = await GetFindAllDepartments();
        setDepartments(data);
      };
    
      fetchDepartments();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            contractDate,
            nickname,
            password,
            cpf,
            salario,
            email,
            cargo,
            departmentName, 
            role
        }
        PostCreateUser(newUser);
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createUserModal">
            Create User
        </button>
        
        <div className="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="createUserModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createUserModalLabel">Create User</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contractDate" className="col-form-label">ContractDate:</label>
                    <input type="text" className="form-control" id="contractDate" onChange={(e) => setContractDate(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nickname" className="col-form-label">Nickname:</label>
                    <input type="text" className="form-control" id="nickname" onChange={(e) => setNickname(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-form-label">Password:</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpf" className="col-form-label">CPF:</label>
                    <input type="text" className="form-control" id="cpf" onChange={(e) => setCpf(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="salario" className="col-form-label">Salario:</label>
                    <input type="number" className="form-control" id="salario" onChange={(e) => setSalario(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label">E-mail:</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cargo" className="col-form-label">Cargo:</label>
                    <input type="text" className="form-control" id="cargo" onChange={(e) => setCargo(e.target.value)}/>
                  </div>
                  <div className="form-group">
                  <label htmlFor="departmentName" className="col-form-label">Department Name:</label>
                  <select name="departmentName"  onChange={(e) => setDepartmentName(e.target.value)}>
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>
                        {dept.nome}
                      </option>
                    ))}
                  </select>
                 
                  </div>
                  <div className="form-group">
                    <label htmlFor="role" className="col-form-label">Role:</label>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                      <option key="MASTER" value="MASTER">MASTER</option>
                      <option key="ADMIN" value="ADMIN">ADMIN</option>
                      <option key="COMUM" value="COMUM">COMUM</option>
                  </select>
                 
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
    )
}
export default CreateUser;