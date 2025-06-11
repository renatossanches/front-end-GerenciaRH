import fetchWithAuth from "../../../../hooks/DefaultFetchWithAuth";
import { AppError } from "../../../exceptions/AppError";

export function GetFindAllDepartments() {
    return fetchWithAuth("/department/all", {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
})
    .then((response) => { 
        if(!response.ok){
            return response.text().then(error => {
                throw new AppError("Usuário não encontrado");
            });    
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Erro no servidor: ", error.message);
        });    
}