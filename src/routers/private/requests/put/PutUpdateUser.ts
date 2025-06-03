import fetchWithAuth from "../../../../hooks/DefaultFetchWithAuth";
import { AppError } from "../../../exceptions/AppError";

export function PutUpdateUser(data: any) {
    return fetchWithAuth(`/user/alter`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(error => {
                    throw new AppError(error);
                });
            }
            return alert("Usuário atualizado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro no servidor: ", error.message);
            alert("Erro no servidor: " + error.message);
        })
}	