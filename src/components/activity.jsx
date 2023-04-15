import { faker } from '@faker-js/faker';
import { useContext, useState, useCallback } from "react"
import { v4 as uuidv4 } from 'uuid';

import Feed from "../components/feed/feed";
import FeedOptions from "../components/feed/feed-options";
import UserProfile from "./user/user-profile";

import GenerateFollowers from "../components/hooks/generate-followers"

function getRandomNumber() {
    let Min = 1;
    let Max = 500;

    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

function ToggleVisibility(elementName) {
    let elementList = document.querySelectorAll(`[id^=${elementName}]`)
    elementList.forEach((element) => {
        element.id = element.id == `${elementName}-false` ? `${elementName}-true` : `${elementName}-false`
    })
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function FeedComponent({ ListOfUsers, ToggleOptions }) {
    function GenerateCommentaries() {
        const CommentariesList = [];
        for (let index = 0; index < ListOfUsers.length; index += 1) {
            let PresumedPerson = ListOfUsers[index];
            let CommentaryInformation = {
                Name: PresumedPerson.name,
                ImageSource: PresumedPerson.image,
                Text: faker.lorem.lines()
            }

            CommentariesList.push(CommentaryInformation)
        }

        shuffle(CommentariesList)

        return CommentariesList
    }

    return (
        <div className="mt-4">
            <h2 className="font-bold text-2xl mb-4">Feeds</h2>
            <ul className="list-none space-y-6">
                {ListOfUsers.map((index) => {
                    let CommentariesList = GenerateCommentaries()
                    let Description = faker.lorem.lines()
                    let LikesQuantity = getRandomNumber()
                    let PostImage = faker.image.image(1280, 1280)

                    return (<li key={uuidv4()}>
                        <Feed
                            OnToggleOptions={() => ToggleOptions()}
                            User={{ Name: index.name, ImageSource: index.image }}
                            PostInformation={
                                {
                                    postOwner: {
                                        Name: index.name,
                                        ProfilePicture: index.image,
                                        Text: Description,
                                        ImageSource: PostImage,
                                        LikesQuantity: LikesQuantity
                                    },
                                    Description: Description,
                                    ImageSource: PostImage,
                                    Likes: LikesQuantity,
                                    Commentaries: CommentariesList
                                }} />
                    </li>)
                })}
            </ul>
        </div>
    )
}

function FollowersComponent({ ListOfUsers }) {
    return (
        <div className="mt-4 py-4 ml-1 overflow-hidden max-w-[571px] max-[450px]:mt-12">
            <ul className="list-none flex space-x-6">
                {ListOfUsers.map((index) => {
                    return (<li key={uuidv4()}>
                        <UserProfile Name={index.name} ImageSource={index.image} />
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default function Activity() {
    const FollowersList = GenerateFollowers();

    return (
        <div className="mb-4 grid place-content-center">
            <FollowersComponent ListOfUsers={FollowersList} />
            <FeedOptions Clicked={() => ToggleVisibility("options")} />
            <FeedComponent
                ListOfUsers={FollowersList}
                ToggleOptions={() => ToggleVisibility("options")}
            />
            <div className="mb-16"></div>
        </div>
    )
}