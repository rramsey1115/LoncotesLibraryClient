import { useEffect, useState } from "react"
import { getAllCheckouts, returnCheckoutById } from "../../data/checkoutsData";
import { Button, Table } from "reactstrap";

export const CheckoutsList = () => {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getAndSetCheckouts();
    }, []);

    const getAndSetCheckouts = () => {
        getAllCheckouts().then(setCheckouts)
    };

    const handleReturn = (id) => {
        returnCheckoutById(id * 1).then(getAndSetCheckouts());
    }

  
    return (
        <div className="container" style={{marginTop:30}}>
        <div className="sub-menu bg-light">
            <h4>Checkouts</h4>
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
                {checkouts.map((co) => {
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
                                onClick={(e) => handleReturn(e.target.value)}
                                >Return
                            </Button>}
                        </td>
                    </tr>)
                })}
            </tbody>
        </Table>
    </div>);
}