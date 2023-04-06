import userIcon from "../images/user-icon.svg"

import UserProfile from "../components/user/user-profile"

export default function Activity() {
    const ListOfUsers = [
        { name: "User_1", image: userIcon },
        { name: "User_2", image: userIcon },
        { name: "User_3", image: userIcon },
        { name: "User_4", image: userIcon },
        { name: "User_5", image: userIcon },
        { name: "User_6", image: userIcon },
        { name: "User_7", image: userIcon },
        { name: "User_8", image: userIcon },
        { name: "User_9", image: userIcon },
        { name: "User_10", image: userIcon },
    ]

    return (
        <div className="mt-4 py-4 ml-1 overflow-auto overflow-y-hidden scrollbar-hide max-w-[571px]">
            <ul className="list-none flex space-x-6">
                {ListOfUsers.map((index) => {
                    return (<li>
                        <UserProfile Name={index.name} ImageSource={index.image} />
                    </li>)
                })}
            </ul>
        </div>
    )
}