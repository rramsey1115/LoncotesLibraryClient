import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/materials/MaterialList";
import MaterialDetails from "./components/materials/MaterialDetails";
import CreateMaterial from "./components/materials/CreateMaterial";
import { PatronList } from "./components/patrons/PatronList";
import { PatronDetails } from "./components/patrons/PatronDetails";
import { EditPatronForm } from "./components/patrons/EditPatron";
import { CheckoutsList } from "./components/checkouts/checkoutsList";
import { AvailableMaterials } from "./components/browse/AvailableMaterials";
import { CreateCheckout } from "./components/checkouts/CreateCheckout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/edit" element={<EditPatronForm />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutsList />} />
          <Route path=":id/create" element={<CreateCheckout />} />
        </Route>
        <Route path="browse">
          <Route index element={<AvailableMaterials />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);


