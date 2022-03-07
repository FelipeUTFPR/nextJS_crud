import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    `}>
        <Layout titulo="Cadastro Simples">

        <span >Conteudo</span>
        </Layout>
      
      
    </div>
  )
}
