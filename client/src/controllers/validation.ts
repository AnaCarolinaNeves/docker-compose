import * as Yup from 'yup'



const registrationSchema = Yup.object().shape({
    nome: Yup.string()
        .required('O nome é obrigatório'),

    cpf: Yup.string()
        .required('O cpf é obrigatório'),

    telefone: Yup.string()
        .required('O telefone é obrigatório'),


})
export default registrationSchema;
