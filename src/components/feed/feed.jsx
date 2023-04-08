import Image from "next/image"

import Bookmark from "../../images/bookmark-icon.svg"
import HeartIcon from "../../images/heart-icon.svg"
import MessageIcon from "../../images/messages-icon.svg"
import MoreIcon from "../../images/more-horizontal.svg"
import SendIcon from "../../images/send-icon.svg"

export default function Feed({ User, PostInformation }) {
    return (
        <div className="max-w-[570px] p-4 grid place-content-center">
            <div className="flex items-center gap-4 p-2 w-full">
                <div class="p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                    <div class="p-2 bg-white rounded-full">
                        <Image src={User.ImageSource} alt={User.Name} width={20} height={20} />
                    </div>
                </div>

                <p className="font-bold">{User.Name}</p>
                <Image className="rounded-full hover:bg-slate-200 hover:cursor-pointer transition ml-auto" src={MoreIcon} alt={"Mais opções"} />
            </div>

            <Image src={PostInformation.ImageSource} />

            <div className="flex items-center gap-4 p-2 w-full mb-1.5">
                <Image src={HeartIcon} alt="Gostar" />
                <Image src={MessageIcon} alt="Comentar" />
                <Image src={SendIcon} alt="Compartilhar" />
                <Image className="ml-auto" src={Bookmark} alt="Bookmark" />
            </div>

            <p className="font-semibold text-sm pl-2">9999 curtidas</p>
            <p className="text-sm pl-2"><b className="font-semibold">{User.Name} </b>{PostInformation.Description}</p>
            <input className="w-full p-4 border-b placeholder:text-xs outline-none" placeholder="Adicione um comentário.."></input>
        </div>
    )
}