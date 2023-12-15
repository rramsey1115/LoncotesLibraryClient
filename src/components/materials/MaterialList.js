import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getMaterials } from "../../data/materialsData";
import { useNavigate } from "react-router-dom";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container" style={{marginTop:30}}>
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Button 
          color="success" 
          size="sm"
          style={{width:80, height:30, marginLeft:30}}
          onClick={(e) => navigate("/materials/create")}
          >New +
        </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Button 
                  color="primary"
                  size="sm"
                  value={m.id} 
                  onClick={(e) => navigate(`${e.target.value}`)}
                  >Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}