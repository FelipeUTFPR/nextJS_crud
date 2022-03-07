interface TabelaProps{
    clientes:Cliente[]
}

export default function Tabela(props){

    //quebrando o código em trechos de funções
    function renderizarCabecalho(){
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }




    return(
        <table>
            <thead>
            {renderizarCabecalho()}
            </thead>

                <tbody>
                    {renderizarDados()}
                </tbody>
           
            

        </table>
    )
}