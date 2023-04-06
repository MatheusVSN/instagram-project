import Image from "next/image"

export default function UserProfile({ ImageSource, Name }) {
    return (
        <div className="">
            <div class="p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full w-[61px]">
                <div class="p-2 bg-white rounded-full">
                    <Image src={ImageSource} alt={Name} width={45} height={45} />
                </div>
            </div>
            <p className="text-center text-xs mt-2">{Name}</p>
        </div>
    )
}