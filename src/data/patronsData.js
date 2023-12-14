const _apiUrl = "/api/patrons";

export const GetPatrons = () => {
    return fetch(_apiUrl).then(r => r.json());
}