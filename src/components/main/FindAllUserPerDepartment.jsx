import { GetUsersPerDepartment } from "../../routers/private/requests/get/GetUsersPerDepartment";
import { useUser } from "../../contexts/UserContextGlobal";
import { useEffect , useState } from "react";
import { DeleteUserByNickname } from "../../routers/private/requests/delete/DeleteUserByNickname";

export function FindAllUserPerDepartment() {
    
    const { user } =  useUser(); 
    const [users, setUsers] = useState([]);
    useEffect(() => {

        const fetchUsers = async () => {
                const response = await GetUsersPerDepartment(user.departamento);
                setUsers(response);
        };

        fetchUsers();
    }, [user]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(users)
          await DeleteUserByNickname(e.target.value);
          window.location.reload();  
      } catch (error) {
          console.error("Erro na deleção:", error);
      }
      
    }

    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Contratação</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody className="table-group-separator-color">
                    {users.map((u, index) => (
                        <tr key={index}>
                            <td>{u.name}</td>
                            <td>{u.contractDate}</td>
                            <td>{u.email}</td>
                            <td>{u.cargo}</td>
                            <td>{u.role}</td>
                            <td><button type="button" className="" onClick={handleSubmit} value={u.nickname}> &otimes; </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
