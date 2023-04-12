import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";

import Feed from "../components/feed/feed";
import FeedOptions from "../components/feed/feed-options";
import UserProfile from "./user/user-profile";

import imageExample from "../images/feed-images/image-example.jpg";

const abortController = new AbortController()

function getRandomNumber() {
    let Min = 1;
    let Max = 500;

    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

export default function Activity() {
    const [ListOfUsers, setUserList] = useState([]);

    useEffect(() => {
        fetch("/api/user-generator", {
            signal: abortController.signal,
            method: "POST",
            body: JSON.stringify({ ammount: 7 })
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then((data) => {
                abortController.abort();
                setUserList(() => {
                    return []
                })
                const updatedList = []
                for (let index = 0; index < data.results.length; index += 1) {
                    let userData = data.results[index];
                    let user = { name: userData.name.first, image: userData.picture.large };
                    updatedList.push(user)
                }
                setUserList((prev) => {
                    return [...prev, ...updatedList]
                })
            })
    }, [])

    const mouseButton1Click = () => {
        let element = document.querySelectorAll('[id^="options"]')[0]
        element.id = element.id == "options-false" ? "options-true" : "options-false"
    }

    return (
        <div className="mb-4 grid place-content-center">
            <div className="mt-4 py-4 ml-1 overflow-auto overflow-y-hidden scrollbar-hide max-w-[571px] max-[450px]:mt-12">
                <ul className="list-none flex space-x-6">
                    {ListOfUsers.map((index) => {
                        return (<li key={index}>
                            <UserProfile Name={index.name} ImageSource={index.image} />
                        </li>)
                    })}
                </ul>
            </div>

            <FeedOptions Clicked={mouseButton1Click} />

            <div className="mt-4">
                <h2 className="font-bold text-2xl mb-4">Feeds</h2>
                <ul className="list-none space-y-6">
                    {ListOfUsers.map((index) => {
                        return (<li key={index}>
                            <Feed OnToggleOptions={mouseButton1Click} User={{ Name: index.name, ImageSource: index.image }} PostInformation={{ Description: faker.lorem.lines(), ImageSource: faker.image.image(1280, 1280) || imageExample, Likes: getRandomNumber() }} />
                        </li>)
                    })}
                </ul>
            </div>

            <div className="mb-16"></div>
        </div>
    )
}