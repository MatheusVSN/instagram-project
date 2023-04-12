import { useState } from "react"

import Image from "next/image"

import Bookmark from "../../images/bookmark-icon.svg"
import HeartIcon from "../../images/heart-icon.svg"
import LikeHeartIcon from "../../images/like-heart-icon.svg"
import MessageIcon from "../../images/messages-icon.svg"
import MoreIcon from "../../images/more-horizontal.svg"
import SendIcon from "../../images/send-icon.svg"

export default function Feed({ User, PostInformation, OnToggleOptions }) {
    const [like, setLike] = useState(0)

    function onLike() {
        setLike((prev) => {
            return prev == 1 ? 0 : 1
        })
    }

    return (
        <div className="max-w-[570px] p-4 grid place-content-center">
            <div className="flex items-center gap-4 p-2 w-full">
                <div className="p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                    <div className="p-1 bg-white rounded-full">
                        <Image className="rounded-full" src={User.ImageSource} alt={User.Name} width={20} height={20} />
                    </div>
                </div>

                <p className="font-bold">{User.Name}</p>
                <Image onClick={() => OnToggleOptions()} className="rounded-full hover:cursor-pointer transition ml-auto hover:scale-150" src={MoreIcon} alt={"Mais opções"} />
            </div>

            <Image src={PostInformation.ImageSource} width={1280} height={720} />

            <div className="flex items-center gap-4 p-2 w-full mb-1.5 transition hover:cursor-pointer">
                <Image className="transition hover:scale-150" src={like == 0 ? HeartIcon : LikeHeartIcon} alt="Gostar" width={24} onClick={onLike} />
                <Image className="transition hover:scale-150" src={MessageIcon} alt="Comentar" />
                <Image className="transition hover:scale-150" src={SendIcon} alt="Compartilhar" />
                <Image className="transition hover:scale-150 ml-auto" src={Bookmark} alt="Bookmark" />
            </div>

            <p className="font-semibold text-sm pl-2">{PostInformation.Likes + like} curtidas</p>
            <p className="text-sm pl-2"><b className="font-semibold">{User.Name} </b>{PostInformation.Description}</p>
            <input className="w-full p-4 border-b placeholder:text-xs outline-none" placeholder="Adicione um comentário.."></input>
        </div>
    )
}