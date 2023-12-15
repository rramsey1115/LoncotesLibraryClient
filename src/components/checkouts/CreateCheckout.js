import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMaterial } from "../../data/materialsData";

export const CreateCheckout = () => {
   const {materialId} = useParams();
   const [material, setMaterial] = useState({});

   const getAndSetMaterial = () => { 
        getMaterial(materialId * 1).then(data => setMaterial(data));
    }

    console.log('material', material);

    return <h1>Checkout Form</h1>

}