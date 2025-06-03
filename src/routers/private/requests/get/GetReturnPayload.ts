import fetchWithAuth from "../../../../hooks/DefaultFetchWithAuth";
import { AppError } from "../../../exceptions/AppError";
export function GetReturnPayload() {
    return fetchWithAuth("/user/payload", {
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
        alert("Erro no servidor: " + error.message);
        });    
}