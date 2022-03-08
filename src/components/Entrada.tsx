interface EntradaProps{
    //valor opcional
    tipo?: 'text' | 'number'
    text: string
    valor: any
    //esse valor será passado opcionalmente lá no Index
    //os demais são obrigatórios
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor:any) => void

}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
               <label className=" mb-2">
                   {props.texto}
                   </label> 
                   {/* caso não seja assumido o padrão será text */}
                   <input 
                   type={props.tipo ?? 'text'}
                   value={props.valor}
                   readOnly={props.somenteLeitura}
                   onChange={e => props.valorMudou?.(e.target.value)}
                   className={`
                    border border-purple-500 rounded-lg
                     focus:outline-none bg-gray-100 px-4 py-2
                     ${props.somenteLeitura ? '' : 'focus:bg-white'}

                   `}
                   />
        </div>
    )
}