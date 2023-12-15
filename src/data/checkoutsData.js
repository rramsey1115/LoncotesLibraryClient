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
