const fetchWithAuth = (url, options = {})=>{
    const token = JSON.parse(localStorage.getItem("authToken"))?.token;

    const header = {
        ...options.headers,
        'Authorization': token ? `Bearer ${token}`: '',
    };
    return fetch(url, {
        ...options, 
        headers: header,
    });
};

export default fetchWithAuth;