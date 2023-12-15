import { useEffect, useState } from "react"
import { getAvailableMaterials } from "../../data/materialsData";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const AvailableMaterials = () => {
    const [availMat, setAvailMet] = useState([]);

    useEffect(() => {
        getAndSetAvailMat();
    }, [])

    const getAndSetAvailMat = () => {
        getAvailableMaterials().then(setAvailMet);
    }
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/checkouts/${id}/create`)
    }

    return (
    <div className="container" style={{marginTop:30}}>
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {availMat.map((m) => (
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
                  onClick={(e) => handleClick(e.target.value)}
                  >Checkout
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}