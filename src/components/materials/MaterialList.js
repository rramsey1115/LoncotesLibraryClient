import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getFilteredMaterials, getMaterials, removeFromCirc } from "../../data/materialsData";
import { useNavigate } from "react-router-dom";
import { GenreFilter } from "./GenreFilter";
import { TypeFilter } from "./TypeFilter";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [genreFilterId, setGenreFilterId] = useState(0);
  const [typeFilterId, setTypeFilterId] = useState(0);
  const [filteredMaterials, setFilteredMaterials] = useState([]);

  useEffect(() => {
    getAndSetMaterials();
  }, []);

  const getAndSetMaterials = () => {
    getMaterials().then(setMaterials);
  };

  const getAndSetFilteredMaterials = () => {
    getFilteredMaterials(typeFilterId, genreFilterId).then(setFilteredMaterials);
  };

  useEffect(() => {
    getAndSetFilteredMaterials()
  }, [typeFilterId, genreFilterId]);

  const handleRemove = (id) => {
    removeFromCirc(id).then(getAndSetMaterials());
  };

  const navigate = useNavigate();

  return (
    <div className="container" style={{marginTop:30}}>
      <div className="sub-menu bg-light" style={{display:"flex", justifyContent:"space-between"}}>
        <h4 style={{margin:10}}>Materials</h4>
        <div style={{display:"flex", flexDirection:"row"}}>
          <TypeFilter getAndSetFilteredMaterials={getAndSetFilteredMaterials} setTypeFilterId={setTypeFilterId}/>
          <GenreFilter getAndSetFilteredMaterials={getAndSetFilteredMaterials} setGenreFilterId={setGenreFilterId}/>
          <Button 
            color="success" 
            size="sm"
            style={{width:80, height:30, margin:10}}
            onClick={(e) => navigate("/materials/create")}
            >New +
          </Button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Details</th>
            <th>Circulation</th>
          </tr>
        </thead>
        <tbody>
        {typeFilterId === 0 && genreFilterId === 0 ? 
          materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Button 
                  color="warning"
                  size="sm"
                  value={m.id} 
                  onClick={(e) => navigate(`${e.target.value}`)}
                  >Details
                </Button>
              </td>
              <td>
                <Button
                  color="danger"
                  size="sm"
                  value={m.id}
                  onClick={(e) => handleRemove(e.target.value)}
                  >Remove
                </Button>
              </td>
            </tr>))
          :
          filteredMaterials.length === 0 ? <tr><td><h5>No Results</h5></td></tr> :
          filteredMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Button 
                  color="warning"
                  size="sm"
                  value={m.id} 
                  onClick={(e) => navigate(`${e.target.value}`)}
                  >Details
                </Button>
              </td>
              <td>
                <Button
                  color="danger"
                  size="sm"
                  value={m.id}
                  onClick={(e) => handleRemove(e.target.value)}
                  >Remove
                </Button>
              </td>
            </tr>))}
        </tbody>
      </Table>
    </div>
  );
}