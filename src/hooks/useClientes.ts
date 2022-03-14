//Criar seus próprios Hooks permite que você extraia a lógica de um componente em funções reutilizáveis.

import { useEffect,useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()
    const[cliente,setCliente] = useState<Cliente>(Cliente.vazio())
    const[clientes,setClientes] = useState<Cliente[]>([])
    
  
   useEffect(obterTodos,[])
  
   function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  
   }
  
    function selecionarCliente(cliente:Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
  
    //colocar para excluir e atualiza a tabela
    async function excluirCliente(cliente:Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
  
    async function SalvarCliente(cliente:Cliente){
      await repo.salvar(cliente)
      obterTodos()
      
    }

    return{
        
        cliente,
        clientes,
        SalvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}