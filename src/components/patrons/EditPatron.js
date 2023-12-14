import { useEffect, useState } from "react"
import { editPatronDetails, getPatronById } from "../../data/patronsData";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

export const EditPatronForm = () => {
    const {id} = useParams();
    const [patron, setPatron] = useState({});
    const [patronEmail, setPatronEmail] = useState(patron?.email)
    const [patronAddress, setPatronAddress] = useState(patron.address)

    useEffect(() => {
        getPatronById(id * 1).then(r => setPatron(r[0]));
    }, [id])

    const navigate = useNavigate();

    const submit = () => {
        const newPatron = {
            "id": patron.id,
            "email": patronEmail,
            "address": patronAddress
        }
        editPatronDetails(patron.id, newPatron).then(() => {
            navigate('/patrons');
        });
    }
    
    return (
        <div className="container" style={{marginTop:30}}>
            <h1>Edit {patron.firstName} {patron.lastName}'s Details</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor="pEmail">Email</Label>
                    <Input
                        required
                        type="email"
                        placeholder={patron.email}
                        name="pEmail"
                        value={patronEmail}
                        onChange={(e) => {
                            setPatronEmail(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="pAddress">Address</Label>
                    <Input
                        required
                        type="text"
                        placeholder={patron.address}
                        name="pAddress"
                        value={patronAddress}
                        onChange={(e) => {
                            setPatronAddress(e.target.value);
                        }}
                    />
                </FormGroup>
                {patronEmail && patronAddress ? <Button onClick={submit}>Submit</Button> : <Button disabled>Submit</Button>}
            </Form>
        </div>
    )
}