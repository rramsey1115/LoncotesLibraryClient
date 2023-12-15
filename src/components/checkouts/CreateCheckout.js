import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getMaterial } from "../../data/materialsData";
import { Button, Form, Input, Table } from "reactstrap";
import { newCheckout } from "../../data/checkoutsData";

export const CreateCheckout = () => {
    const { id } = useParams();
    const [material, setMaterial] = useState({});
    const [patronId, setPatronId] = useState(0);
    const [checkoutObj, setCheckoutObj] = useState({});

    useEffect(() => {
        getAndSetMaterial();
    }, [id]);

    useEffect(() => {      
        setCheckoutObj({        
        materialId: material.id,
        genreId: material.genreId,
        materialTypeId: material.materialTypeId,
        patronId: patronId * 1
    });}, [material, patronId]);

    const getAndSetMaterial = () => { 
        getMaterial(id).then(data => setMaterial(data));
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        newCheckout(checkoutObj).then(navigate("/materials"));
    };

    console.log('material', material);

    return (
        <div className="container" style={{marginTop:30}}>
            <div className="sub-menu bg-light" style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Checkout {material.materialName}</h4>
                <Button size="sm" color="warning" style={{marginLeft:20, height:30}}>Go Back</Button>
            </div>
            <Table>
                <tbody>
                    <tr>
                        <th>Material</th>
                        <td>{material.materialType?.name}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>{material.genre?.name}</td>
                    </tr>
                    <tr>
                        <th>Checkout Days</th>
                        <td>{material.materialType?.checkoutDays}</td>
                    </tr>
                </tbody>
            </Table>
        <Form>
            <h4>Enter Patron Id</h4>
            <Input 
                type="text"
                onChange={e => setPatronId(e.target.value)} />
            {patronId > 0 
            ? <Button 
                size="sm" 
                color="success" 
                type="button"
                onClick={(e) => {e.preventDefault(); handleSubmit()}}
                >Checkout
            </Button> 
            : <Button disabled>Checkout</Button>}
        </Form>
    </div>);
}