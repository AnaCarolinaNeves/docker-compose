import axios from 'axios';
import { useEffect } from "react";
import { useFormik } from "formik";
import { initialValues } from "../types";
import { avisoErro, registrationSchema, avisoConcluido } from "../controllers";
import { URI } from "../enumerations/uri";
import clsx from "clsx";

function FormularioCadastroCliente() {

    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        initialErrors: { nome: "" },
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(URI.CRIAR_CLIENTE, values);
                resetForm(); // Reseta o formulário para os valores iniciais
                avisoConcluido();
            } catch (error) {
                avisoErro();
            }
        },
    });

    function onClickEnviar() {
        if (!formik.isValid) {
            avisoErro();
        } else {
            formik.submitForm();
            avisoConcluido();
        }
    }

    useEffect(() => { }, []);


    return (
        <>
            <div className="row">
                <h5>Cadastro de cliente</h5>
                <form className="col s12" onSubmit={formik.handleSubmit}>
                    {formik.status && (
                        <div className="mb-5 alert alert-danger">
                            <div className="alert-text font-weight-bold">{formik.status}</div>
                        </div>
                    )}
                    <div className="row">

                        <div className="input-field col s4">
                            <label htmlFor="nome_cliente">Nome</label>
                            <input type="text" autoComplete="off" {...formik.getFieldProps("nome")}
                                onChange={formik.handleChange}
                                value={formik.values.nome}
                                className={clsx(
                                    "form-control bg-transparent",
                                    {
                                        "is-invalid":
                                            formik.touched.nome && formik.errors.nome,
                                    },
                                    {
                                        "is-valid":
                                            formik.touched.nome &&
                                            !formik.errors.nome,
                                    }
                                )}
                            />
                            {formik.touched.nome && formik.errors.nome && (
                                <div className="fv-plugins-message-container">
                                    <div className="fv-help-block">
                                        <span role="alert">{formik.errors.nome}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="input-field col s4">
                            <label htmlFor="cpf_cliente">CPF</label>
                            <input type="text" autoComplete="off" {...formik.getFieldProps("cpf")}
                                onChange={formik.handleChange}
                                value={formik.values.cpf}
                                className={clsx(
                                    "form-control bg-transparent",
                                    {
                                        "is-invalid":
                                            formik.touched.cpf && formik.errors.cpf,
                                    },
                                    {
                                        "is-valid":
                                            formik.touched.cpf &&
                                            !formik.errors.cpf,
                                    }
                                )}
                            />
                            {formik.touched.cpf && formik.errors.cpf && (
                                <div className="fv-plugins-message-container">
                                    <div className="fv-help-block">
                                        <span role="alert">{formik.errors.cpf}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="input-field col s4">
                            <label htmlFor="telefone_cliente">Telefone</label>
                            <input type="text" autoComplete="off" {...formik.getFieldProps("telefone")}
                                onChange={formik.handleChange}
                                value={formik.values.telefone}
                                className={clsx(
                                    "form-control bg-transparent",
                                    {
                                        "is-invalid":
                                            formik.touched.telefone && formik.errors.telefone,
                                    },
                                    {
                                        "is-valid":
                                            formik.touched.telefone &&
                                            !formik.errors.telefone,
                                    }
                                )}
                            />
                            {formik.touched.telefone && formik.errors.telefone && (
                                <div className="fv-plugins-message-container">
                                    <div className="fv-help-block">
                                        <span role="alert">{formik.errors.telefone}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect #f06292 pink lighten-2"
                                onClick={onClickEnviar} disabled={formik.isSubmitting}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormularioCadastroCliente;