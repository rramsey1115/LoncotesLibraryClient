const _apiUrl = "/api/materials";

export const getMaterials = () => {
  return fetch(`${_apiUrl}`).then((r) => r.json());
};

export const getFilteredMaterials = (mtId, gId) => {
  return fetch(`${_apiUrl}/${mtId}/${gId}`).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id  * 1}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

export const removeFromCirc = (materialId) => {
  return fetch(`${_apiUrl}/${materialId * 1}/remove_circulation`,
    {
      method: "PUT",
      headers: {"Content-Type":"application/json"}
    });
};

export const getAvailableMaterials = () => {
  return fetch(`${_apiUrl}/available`).then(res => res.json());
}
