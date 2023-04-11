import { useEffect, useState } from "react";

import Image from "next/image";
import UserRecomendationComponent from "../user/user-profile-recomended.jsx";


const abortController = new AbortController()
const abortFollowers = new AbortController()
const abortRecommendation = new AbortController()

function MiniButton({ Name }) {
    return (
        <p className="text-gray-500 text-xs hover:cursor-pointer hover:underline">{Name}</p>
    )
}

function getRandomNumberBetween(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

const ReasonsList = [
    "Novo(a) no Instagram", "Seguido(a) por %n e %n", "Sugestões para você", "Segue você"
]

export default function UserProfile({ ImageSource, Name, FullName }) {
    const [RecommendationUsers, setRecommendation] = useState([])


    useEffect(() => {
        fetch("/api/user-generator", {
            signal: abortController.signal,
            method: "POST",
            body: JSON.stringify({ ammount: 5 })
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then((data) => {
                abortController.abort();
                for (let index = 0; index < data.results.length; index += 1) {
                    let userData = data.results[index];
                    let randomIndex = getRandomNumberBetween(0, 3);
                    let Reason = ReasonsList[randomIndex]
                    if (randomIndex == 1) {
                    }
                    let user = { name: userData.name.first, image: userData.picture.large, reason: Reason };
                    setRecommendation((prev) => {
                        return [...prev, user]
                    })
                }
            })
    }, [])


    const Options = [
        "Sobre", "Ajuda", "Imprensa", "API", "Carreiras", "Privacidade", "Termos", "Localizações",
        "Idioma", "Meta Verified"
    ]


    return (
        <div className="mr-6">
            <div className="flex items-center mt-8 mb-3">
                <div className="p-0.5 bg-gray-100 rounded-full w-[56px]">
                    <div className="p-2 bg-white rounded-full">
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
                    return (<li key={index}>
                        <UserRecomendationComponent ImageSource={index.image} Name={index.name} Reason={index.reason} />
                    </li>)
                })}
            </ul>

            <ul className="list-disc max-w-[280px] mb-3">
                {Options.map((index) => {
                    return (<li key={index} className="inline-flex items-center align-baseline before:content-['\00B7'] before:mx-1">
                        <MiniButton Name={index} />
                    </li>)
                })}
            </ul>

            <p className="text-gray-500 text-xs">© 2023 INSTAGRAM FROM META</p>
        </div>
    )
}