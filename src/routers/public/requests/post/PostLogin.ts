import { AppError } from "../../../exceptions/AppError";


export function PostLogin(data: any) {
return fetch(
    "/login",
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
    alert("Logado com sucesso!");
    return response.text();
})
.then((data) => {
    localStorage.setItem("authToken", data);
  })
.catch((error) => {
    console.error("Erro no servidor: ", error.message);
    alert("Erro no servidor: " + error.message);
});
}