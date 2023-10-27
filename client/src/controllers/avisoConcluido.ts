import Swal, { SweetAlertResult } from "sweetalert2";

function avisoConcluido (): Promise<SweetAlertResult>  {
  return Swal.fire({
    title: "Sucesso",
    text: "Cadastro enviado com sucesso!",
    icon: "success",
    confirmButtonColor: "#54C5CE",
  });
}

async function avisoDeletar(): Promise<SweetAlertResult> {
  return Swal.fire({
    title: "Deletar cliente",
    text: "Essa ação não pode ser revertida",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, deletar",
  });
}

export { avisoConcluido, avisoDeletar };