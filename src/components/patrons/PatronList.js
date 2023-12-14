import { useEffect, useState } from "react"
import { GetPatrons } from "../../data/patronsData";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";

export const PatronList = () => {
    const [ patrons, setPatrons] = useState([]);

    useEffect(() => {
        GetPatrons().then(data => setPatrons(data))
    }, []);

    const navigate = useNavigate();
    
    return (
    <div className="container" style={{marginTop:30}}>
        <div className="sub-menu bg-light">
            <h4>Patrons</h4>
        </div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Active</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {patrons.map((p) => (
                <tr key={`patron-${p.id}`}>
                    <th scope="row">{p.id}</th>
                    <td>{p.firstName}{` `}{p.lastName}</td>
                    <td>{p.address}</td>
                    <td>{p.email}</td>
                    <td>{p.isActive ? 'Active' : 'Inactive'}</td>
                    <td><Button color="primary" value={p.id} onClick={(e) => navigate(`${e.target.value}`)}>Details</Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>)
}