import { AppError } from "../../../exceptions/AppError";

export function PostCreateEnterprise(data: any) {
    return fetch(
        "/enterprise/create",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    )
    .then((response) => {
        if (!response.ok) {
            return response.text().then(error => {
                throw new AppError(error);
            });
        }        
        return alert("Empresa criada com sucesso!");
    })
    .catch((error) => {
        console.error("Erro no servidor: ", error.message);
        alert("Erro no servidor: " + error.message);
    });
}

