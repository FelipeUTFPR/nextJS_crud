import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'



export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSelecionado(cliente:Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente:Cliente){
    console.log(`Excluir.. ${cliente.nome}`)
  }

  function SalvarCliente(cliente:Cliente){
    console.log(cliente)
    
  }

  const [visivel, setVisivel] = useState<'tabela'| 'form'>('tabela')


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    `}>
        <Layout titulo="Cadastro Simples">

         { visivel === 'tabela' ? (
            <>
            <div className='flex justify-end'>
            <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
  
            </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
          />
  
  </>

          ): (
<Formulario cliente={clientes[0]}
clienteMudou={SalvarCliente}
cancelado={() => setVisivel('tabela')}/>
          )}


          

         
        </Layout>
     
      
    </div>
  )
}
