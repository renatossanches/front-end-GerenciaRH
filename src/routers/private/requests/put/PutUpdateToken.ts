import fetchWithAuth from "../../../../hooks/DefaultFetchWithAuth";
import { AppError } from "../../../exceptions/AppError";

export function PutUdateToken() {
    return fetchWithAuth(`/tokens`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(error => {
                    throw new AppError(error);
                });
            }
            localStorage.removeItem('authToken')
            return alert("Usuário deslogado com sucesso");
        })
        .catch((error) => {
            console.error("Erro no servidor: ", error.message);
            alert("Erro no servidor: " + error.message);
        })
}