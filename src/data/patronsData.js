const _apiUrl = "/api/patrons";

export const GetPatrons = () => {
    return fetch(_apiUrl).then(r => r.json());
};

export const getPatronById = (id) => {
    return fetch(`${_apiUrl}/${id * 1}`).then(r => r.json());
};

export const editPatronDetails = async (patronId, patronObj) => {
    await fetch(`${_apiUrl}/${patronId}/update`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(patronObj)
    });
}