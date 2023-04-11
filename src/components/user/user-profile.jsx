import Image from "next/image"

export default function UserProfile({ ImageSource, Name }) {
    return (
        <div className="rounded-full">
            <div className="p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full w-[61px]">
                <div className="p-1 bg-white rounded-full w-full h-full">
                    <Image className="rounded-full" src={ImageSource} alt={Name} width={50} height={50} />
                </div>
            </div>
            <p className="text-center text-xs mt-2">{Name}</p>
        </div>
    )
}