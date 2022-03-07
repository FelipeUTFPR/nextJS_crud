import Titulo from "./Titulo"

//Garantir que algumas propriedades seja exigidas no seu componente
//o componente título esperar um child e um titulo

interface LayoutProps{
    titulo: string
    children:any
}



export default function Layout(props:LayoutProps){
    return(
        <div className={`
        flex flex-col w-2/3
        bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>

        </div>
    )
}