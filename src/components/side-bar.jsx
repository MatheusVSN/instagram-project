import Image from "next/image"

import CompassIcon from "../images/compass-icon.svg"
import HeartIcon from "../images/heart-icon.svg"
import HomeLogo from "../images/home-logo.svg"
import InstagramIcon from "../images/instagram-icon.svg"
import InstagramLogo from "../images/instagram-logo-text.svg"
import ListIcon from "../images/list-icon.svg"
import MessageIcon from "../images/messages-icon.svg"
import PlusIcon from "../images/plus-square-icon.svg"
import ReelsIcon from "../images/reels-icon.svg"
import SearchIcon from "../images/search-icon.svg"
import UserIcon from "../images/user-icon.svg"

import SideBarOption from "../components/side-bar/option.jsx"
import UserProfileStyle2 from "../components/user/user-profile-2.jsx"

export default function SideBar() {
    const OptionContainer = [
        { logo: InstagramIcon, name: "", isMobile: true },
        { logo: HomeLogo, name: "Pagina Inicial", active: true, renderOnMobile: true },
        { logo: SearchIcon, name: "Pesquisar", },
        { logo: CompassIcon, name: "Explorar", renderOnMobile: true },
        { logo: ReelsIcon, name: "Reels", renderOnMobile: true },
        { logo: MessageIcon, name: "Mensagens", renderOnMobile: true },
        { logo: HeartIcon, name: "Notificações", },
        { logo: PlusIcon, name: "Criar", },
        { logo: UserIcon, name: "Perfil", renderOnMobile: true },
        { logo: ListIcon, name: "Mais", bottom: true }
    ]

    return (
        <>
            {/* Main side bar */}
            <div className="pb-5 pt-2 px-3 w-60  h-full border-r max-xl:w-20 max-md:hidden fixed flex flex-wrap justify-start content-start">
                <Image src={InstagramLogo} alt="Instagram Homepage" width={140} className="pt-5 px-3 pb-4 max-xl:hidden" />
                <ul className="list-none w-full">
                    {OptionContainer.map((index) => {
                        return (
                            <li key={index} className={index.bottom === true && "mt-auto"}>
                                <SideBarOption key={index} imageSource={index.logo} name={index.name} isActive={index.active} isMobile={index.isMobile} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Top mobile navigation bar(logo/search-bar) */}
            <div className="md:hidden bg-slate-50 fixed right-0 left-0 top-0 border-b flex items-center justify-between max-[450px]:flex max-[450px]:flex-col">
                <Image src={InstagramLogo} alt="Instagram Homepage" width={120} className="pt-5 px-3 pb-4" />

                <div className="flex justify-end px-4">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Image src={SearchIcon} width={15} alt="Pesquisar" />
                        </span>
                        <input className="placeholder:italic placeholder:text-slate-400 block w-64 bg-slate-50 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Pesquisar" type="text" name="search" />
                    </label>
                    <Image className="ml-4" src={HeartIcon} alt="Notificações" />
                </div>
            </div>

            <div className="h-px bg-slate-50 w-screen"></div>

            {/* Bottom mobile navigation bar */}
            <div className="md:hidden bg-slate-50 fixed bottom-0 left-0 right-0 border-t">

                <ul className="list-none flex justify-around">
                    {OptionContainer.map((index) => {
                        if (!index.renderOnMobile) return

                        return (
                            <li key={index}>
                                <SideBarOption key={index} imageSource={index.logo} name={index.name} isActive={index.active} isMobile={index.isMobile} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Top right side bar */}
            <div className="max-xl:hidden fixed right-0">
                <UserProfileStyle2 ImageSource={UserIcon} Name="Usuário" FullName="Usuario Lorem Ipsum" />
            </div>
        </>
    )
}