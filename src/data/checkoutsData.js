const _apiUrl = "/api/checkouts";

export const getAllCheckouts = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const returnCheckoutById = (id) => {
    return fetch(`${_apiUrl}/${id}/return`,
    {
        method: "PUT",
        headers: {"Content-Type":"application/json"}
    });
};

export const newCheckout = async (checkoutObj) => {
    const res = await fetch(`${_apiUrl}`, {
        method:"POST", 
        headers:{"Content-Type":"application/json",}, 
        body: JSON.stringify(checkoutObj),
    }).then((res) => res.json());
    return res
}


export const getAllOverdueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then((res) => res.json())
}