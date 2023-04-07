import Image from "next/image"

export default function UserProfile({ ImageSource, Name, Reason }) {
    return (
        <div className="flex items-center mt-2">
            <div class="p-0.5 bg-gray-100 rounded-full w-[46px]">
                <div class="p-2 bg-white rounded-full">
                    <Image src={ImageSource} alt={Name} width={32} height={32} />
                </div>
            </div>

            <div className="flex items-center">
                <div className="mx-4 w-[170px] max-w-[170px]">
                    <p className="text-left text-xs font-bold">{Name}</p>
                    <p className="text-left text-xs">{Reason}</p>
                </div>

                <p className="text-blue-500 text-center text-xs hover:text-gray-700 hover:cursor-pointer">Seguir</p>
            </div>
        </div>
    )
}