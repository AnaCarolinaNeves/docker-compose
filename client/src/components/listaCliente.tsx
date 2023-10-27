/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import axios from "axios";
import { Clients } from "../types";
import { URI } from "../enumerations/uri";
import { avisoDeletar } from "../controllers/avisoConcluido";
import { avisoErroDeletar } from "../controllers/avisoErro";

function ListaCliente() {

    const [data, setData] = useState<Clients[]>([]);

    useEffect(() => {

        const elems = document.querySelectorAll('.collapsible');
        window.M.Collapsible.init(elems);

        async function fetchClient() {
            axios
                .get(URI.PEGAR_CLIENTE)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        fetchClient();
    }, []);

    //delete
    async function handleDeleteClient(id: number) {
        try {
            avisoDeletar().then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${URI.DELETE_CLIENTE}${id}`);
                    const updatedClient = data.filter((call) => call.id !== id);
                    setData(updatedClient);
                }
            })

        } catch (error) {
            console.error(error);
            avisoErroDeletar();
        }
    }

    return (
        <>
            <h5>Lista de clientes</h5>
            <ul className="collapsible">
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="collapsible-header"><i className="material-icons">person</i>{item.nome}</div>
                            <div className="collapsible-body row">
                                <div className="col s4">
                                    <h6 id="nome_cliente">{item.nome}</h6>
                                    <label htmlFor="nome_cliente">Nome</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="cpf_cliente">{item.cpf}</h6>
                                    <label htmlFor="cpf">CPF</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="telefone_cliente">{item.telefone}</h6>
                                    <label htmlFor="telefone">Telefone</label>
                                </div>
                            </div>
                            <div className="collapsible-body row">
                                <div className="col">
                                    <a className="btn waves-effect #f06292 pink lighten-2" onClick={() => handleDeleteClient(item.id)}>Excluir
                                        <i className="small material-icons right">delete</i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ListaCliente;