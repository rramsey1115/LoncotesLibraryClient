import { useEffect, useState } from "react"
import { getAvailableMaterials } from "../../data/materialsData";

export const AvailableMaterials = () => {
    const [availMat, setAvailMet] = useState([]);

    useEffect(() => {
        getAndSetAvailMat();
    }, [])

    const getAndSetAvailMat = () => {
        getAvailableMaterials().then(setAvailMet);
    }

    return (
        <div className="container">
            
        </div>
    );

}