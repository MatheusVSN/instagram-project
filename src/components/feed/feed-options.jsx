
export default function FeedOptions({ Clicked }) {
    const OptionsList = [
        { name: "Denunciar", color: "red" },
        { name: "Parar de seguir", color: "red" },
        { name: "Adicionar aos Favoritos" },
        { name: "Ir para a publicação" },
        { name: "Compartilhar em..." },
        { name: "Copiar link" },
        { name: "Incorporar" },
        { name: "Sobre essa conta" },
        { name: "Cancelar", noborder: true }
    ]

    return (
        <div id="options-false" className={`fixed left-0 top-0 bg-black bg-opacity-50 h-screen w-screen z-20`}>
            <div className="flex flex-col bg-white rounded-lg md:w-[400px] max-md:w-[300px]">
                {OptionsList.map((index) => {
                    return (<button key={index} onClick={() => Clicked()} className={`text-center p-3  ${index.color ? "text-red-500 font-bold" : undefined} ${!index.noborder ? "border-b" : undefined}`}>{index.name}</button>)
                })}
            </div>
        </div>
    )
}