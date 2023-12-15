import { useEffect, useState } from "react"
import { getAllOverdueCheckouts } from "../../data/checkoutsData";
import { Button, Table } from "reactstrap";

export const OverdueCheckouts = () => {
    const [overdues, setOverdues] = useState([]);

    useEffect(() => {
        getAndSetCheckouts();
    }, []);

    const getAndSetCheckouts = () => {
        getAllOverdueCheckouts().then(setOverdues)
    };
  
    return (
        <div className="container" style={{marginTop:30}}>
        <div className="sub-menu bg-light">
            <h4>Overdue Checkouts</h4>
        </div>
        <Table style={{marginTop:10}}>
            <thead>
                <tr>
                    <th>Checkout Id</th>
                    <th>Material</th>
                    <th>Material Type</th>
                    <th>Genre</th>
                    <th>Patron</th>
                    <th>Returned</th>
                </tr>
            </thead>
            <tbody>
                {overdues.map((co) => {
                    console.log("date", co.returnDate)
                    return(<tr key={co.id}>
                        <th scope="row">{co.id}</th>
                        <td>{co.material.materialName}</td>
                        <td>{co.material.materialType.name}</td>
                        <td>{co.material.genre.name}</td>
                        <td>{co.patron.firstName} {co.patron.lastName}</td>
                        <td>{co.returnDate
                            ? co.returnDate
                            : <Button
                                size="sm"
                                color="success"
                                value={co.id}
                                >Return
                            </Button>}
                        </td>
                    </tr>)
                })}
            </tbody>
        </Table>
    </div>);
}