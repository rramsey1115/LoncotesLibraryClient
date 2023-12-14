import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPatronById } from "../../data/patronsData";
import { Button, Table } from "reactstrap";

export const PatronDetails = () => {
    const {id} = useParams();
    const [ patron, setPatron] = useState({});

    const navigate = useNavigate();
    let lateFees = 0;
    patron.checkouts?.map(co => lateFees += co.lateFee)

    useEffect(()=> {
        getPatronById(id * 1).then(data => setPatron(data[0]));
    }, [id]);
    
    if (!patron) {
        return null;
    }
    
    return (
    <div className="container" style={{marginTop:30}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Button 
                size="sm" 
                color="warning" 
                style={{height:33}}
                value={patron.id}
                onClick={(e) => navigate(`/patrons/${e.target.value}/edit`)}
                >Edit User
            </Button>
        </div>
        <Table>
        <tbody>
            <tr>
                <th scope="row">Email</th>
                <td>{patron.email}</td>
            </tr>
            <tr>
                <th scope="row">Address</th>
                <td>{patron.address}</td>
            </tr>
            <tr>
                <th scope="row">Late Fees?</th>
                <td>${lateFees}.00</td>
            </tr>
        </tbody>
        </Table>
    </div>);
}