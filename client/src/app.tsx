import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter, useParams } from "react-router-dom";
import FormularioCadastroCliente from "./components/formularioCadastroCliente";
import ListaCliente from "./components/listaCliente";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar /><BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/listaCliente" />} />
          <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
          <Route path="/listaCliente" element={<ListaCliente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;