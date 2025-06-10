import fetchWithAuth from "../../../../hooks/DefaultFetchWithAuth";
import { AppError } from "../../../exceptions/AppError";

export function DeleteUserByNickname(nickname: string) {
    return fetchWithAuth(`/user/${nickname}`, {
        method: "DELETE",
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
            return alert("Usuário deletado com sucesso!")
        })
        .catch((error) => {
            console.error("Erro no servidor: ", error.message);
            alert("Erro no servidor: " + error.message);
        })
}