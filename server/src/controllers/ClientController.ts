import { Request, Response } from 'express';
import { Client } from "../entities/Client";

var data = [
    {id: 1, nome: "Ana", cpf: "12345678900", telefone: "1298369258"},
    {id: 2, nome: "Iris", cpf: "12345678900", telefone: "1298369258"},
    {id: 3, nome: "Amanda", cpf: "12345678900", telefone: "1298369258"},
]
var idGlobal = 3;

class ClientController {

    public async getHistoricClient (req: Request, res: Response) : Promise<Response> {
        return res.json(data)
    }

    public async getClient (req: Request, res: Response) : Promise<Response> {
        const idcli:any = req.params.uuid
        var cli = data.filter(cli => cli.id === idcli)[0]
        return res.json(cli)
    }

    public async postClient (req: Request, res: Response) : Promise<Response> {
        const createClient = req.body
       
       idGlobal++
        var d = {
            id: idGlobal,
            nome :createClient.nome,
            cpf : createClient.cpf,
            telefone : createClient.telefone}
     
        data.push(d)
        return res.json(data)
    }

    public async deleteClient (req: Request, res: Response) : Promise<Response> {
        const idcli:any = req.params.uuid
        data = data.filter(cli => cli.id !== idcli)
        return res.json(data)
    }

}
export default new ClientController();