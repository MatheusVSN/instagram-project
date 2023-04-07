import Image from "next/image"
import UserRecomendationComponent from "../user/user-profile-recomended.jsx"

import userIcon from "../../images/user-icon.svg"

function MiniButton({ Name }) {
    return (
        <p className="text-gray-500 text-xs hover:cursor-pointer hover:underline">{Name}</p>
    )
}

export default function UserProfile({ ImageSource, Name, FullName }) {
    const RecommendationUsers = [
        { name: "User_9", image: userIcon, reason: "Novo no Instagram" },
        { name: "User_10", image: userIcon, reason: "Seguido(a) por user_1 e user_2" },
        { name: "User_11", image: userIcon, reason: "Sugestões para você" },
        { name: "User_12", image: userIcon, reason: "Segue você" },
        { name: "User_13", image: userIcon, reason: "Novo no Instagram" },
    ]
    const Options = [
        "Sobre", "Ajuda", "Imprensa", "API", "Carreiras", "Privacidade", "Termos", "Localizações",
        "Idioma", "Meta Verified"
    ]


    return (
        <div className="mr-6">
            <div className="flex items-center mt-8 mb-3">
                <div class="p-0.5 bg-gray-100 rounded-full w-[56px]">
                    <div class="p-2 bg-white rounded-full">
                        <Image src={ImageSource} alt={Name} width={45} height={45} />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="mx-4">
                        <p className="text-left text-xs font-bold">{Name}</p>
                        <p className="text-left text-sm">{FullName}</p>
                    </div>

                    <p className="text-blue-500 text-center text-xs relative left-6 hover:cursor-pointer">Mudar</p>
                </div>
            </div>

            <div className="flex items-center mb-3">
                <p className="font-semibold text-sm text-gray-500">Sugestões para você</p>
                <p className="font-semibold text-xs ml-auto hover:text-gray-500 hover:cursor-pointer">Ver tudo</p>
            </div>

            <ul className="list-none mb-3">
                {RecommendationUsers.map((index) => {
                    return (<li>
                        <UserRecomendationComponent ImageSource={index.image} Name={index.name} Reason={index.reason} />
                    </li>)
                })}
            </ul>

            <ul className="list-disc max-w-[280px] mb-3">
                {Options.map((index) => {
                    return (<li className="inline-flex items-center align-baseline before:content-['\00B7'] before:mx-1">
                        <MiniButton Name={index} />
                    </li>)
                })}
            </ul>

            <p className="text-gray-500 text-xs">© 2023 INSTAGRAM FROM META</p>
        </div>
    )
}