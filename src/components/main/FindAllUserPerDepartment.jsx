import { GetUsersPerDepartment } from "../../routers/private/requests/get/GetUsersPerDepartment";
import { useUser } from "../../contexts/UserContextGlobal";
import { useEffect , useState } from "react";

export function FindAllUserPerDepartment() {
    
    const { user, getUser } =  useUser(); 
    const [users, setUsers] = useState([]);
    useEffect(() => {

        const fetchUsers = async () => {
                const response = await GetUsersPerDepartment(user.departamento);
                setUsers(response);
        };

        fetchUsers();
    }, [user]);
    
    return (
        <div>
            <table class="table table-dark table-hover">
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
