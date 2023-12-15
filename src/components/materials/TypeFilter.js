import { useEffect, useState } from "react";
import { getMaterialTypes } from "../../data/materialTypesData";
import { Input } from "reactstrap";

export const TypeFilter = ({setTypeFilterId}) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getAndSetTypes()
    }, []);

    const getAndSetTypes = () => {getMaterialTypes().then(setTypes)};

    const handleChange = (id) => {
        setTypeFilterId(id)
    };

    return ( <Input
            name="genre"
            type="select"
            onChange={(e) => {
            handleChange(e.target.value * 1);
            }}
        >
        <option value="0">Filter by Type</option>
        {types.map((t) => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
    </Input>);
}