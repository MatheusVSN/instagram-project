import imageExample from "../images/feed-images/image-example.jpg";
import userIcon from "../images/user-icon.svg";

import Feed from "../components/feed/feed";
import UserProfile from "./user/user-profile";

function getRandomNumberBetween(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

function getRandomNumber() {
    let Min = 1;
    let Max = 500;

    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

class PostObject {
    constructor(imageSource, description) {
        this.ImageSource = ImageSource || imageExample,
            this.Description = description,
            this.Likes = getRandomNumber()
    }
}

export default function Activity() {
    const ListOfUsers = [
        { name: "User_1", image: userIcon },
        { name: "User_2", image: userIcon },
        { name: "User_3", image: userIcon },
        { name: "User_4", image: userIcon },
        { name: "User_5", image: userIcon },
        { name: "User_6", image: userIcon },
        { name: "User_7", image: userIcon },
    ]


    return (
        <div className="mb-4 grid place-content-center">
            <div className="mt-4 py-4 ml-1 overflow-auto overflow-y-hidden scrollbar-hide min-md:max-w-[571px]">
                <ul className="list-none flex space-x-6">
                    {ListOfUsers.map((index) => {
                        return (<li key={index}>
                            <UserProfile Name={index.name} ImageSource={index.image} />
                        </li>)
                    })}
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-2xl mb-4">Feeds</h2>
                <ul className="list-none space-y-6">
                    {ListOfUsers.map((index) => {
                        return (<li key={index}>
                            <Feed User={{ Name: index.name, ImageSource: index.image }} PostInformation={{ Description: "Descrição", ImageSource: imageExample }} />
                        </li>)
                    })}
                </ul>
            </div>

            <div className="mb-16"></div>
        </div>
    )
}