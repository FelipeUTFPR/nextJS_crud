import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'



export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()


  const[cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const[clientes,setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela'| 'form'>('tabela')

 useEffect(obterTodos,[])

 function obterTodos(){
  repo.obterTodos().then(clientes => {
    setClientes(clientes)
    setVisivel('tabela')
  })

 }

  function clienteSelecionado(cliente:Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  //colocar para excluir e atualiza a tabela
  async function clienteExcluido(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function SalvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
    
  }

 


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    `}>
        <Layout titulo="Cadastro Simples">

         { visivel === 'tabela' ? (
            <>
            <div className='flex justify-end'>
            <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
  
            </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
          />
  
  </>

          ): (
<Formulario cliente={cliente}
clienteMudou={SalvarCliente}
cancelado={() => setVisivel('tabela')}/>
          )}


          

         
        </Layout>
     
      
    </div>
  )
}
