import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";

import Feed from "../components/feed/feed";
import imageExample from "../images/feed-images/image-example.jpg";

import UserProfile from "./user/user-profile";

const abortController = new AbortController()
const fetcher = (url) => fetch(url).then((response) => response.json());

function getRandomNumberBetween(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

function getRandomNumber() {
    let Min = 1;
    let Max = 500;

    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

class PostObject {
    constructor(user, imageSource, description) {
        this.User = user
        this.ImageSource = imageSource || imageExample,
            this.Description = description,
            this.Likes = getRandomNumber()
    }
}

class Person {
    constructor(name, profilePicture) {
        this.Name = name,
            this.Image = profilePicture
    }
}

export default function Activity() {
    const [ListOfUsers, setUserList] = useState([]);
    const [ListOfPosts, setPostList] = useState([]);
    const [Quantity, setQuantity] = useState(0)

    useEffect(() => {
        fetch("/api/user-generator", {
            signal: abortController.signal,
            method: "POST",
            body: JSON.stringify({ ammount: 7, gettingFollowers: true })
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
                    let user = { name: userData.name.first, image: userData.picture.thumbnail };
                    setUserList((prev) => {
                        return [...prev, user]
                    })
                }
            })
    }, [])

    async function fetchImages() {
        try {
            const abortPost = new AbortController()
            const response = await fetch("/api/image-generator", { signal: abortPost.signal })
            if (response.status == 200) {
                const data = await response.json()
                abortPost.abort()
                return data
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (errorReason) {
            return { id: "FAILED", advice: errorReason };
        }
    }

    function InitialPostSetup() {
        fetchImages().then((data) => {
            setQuantity((prev) => {
                return prev + 1
            })
            let User = ListOfUsers[getRandomNumberBetween(0, ListOfUsers.length)]
            if (!User) return
            let NewPost = new PostObject(User, data.url, faker.lorem.lines())
            setPostList((previousItems) => {
                return [...previousItems, NewPost]
            })
        })
    }


    if (Quantity <= 8) {
        InitialPostSetup()
    }

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
                    {ListOfPosts.map((index) => {
                        return <li key={index}>
                            <Feed User={{ Name: index.User.name, ImageSource: index.User.image }} PostInformation={{ Description: index.Description, ImageSource: index.ImageSource, Likes: index.Likes }} />
                        </li>
                    })}

                    {/* 
                    {ListOfUsers.map((index) => {
                        return (<li key={index}>
                            <Feed User={{ Name: index.name, ImageSource: index.image }} PostInformation={{ Description: "Descrição", ImageSource: imageExample, Likes: getRandomNumber() }} />
                        </li>)
                    })}
                    */}
                </ul>
            </div>

            <div className="mb-16"></div>
        </div>
    )
}