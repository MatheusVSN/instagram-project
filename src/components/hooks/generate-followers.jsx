import {useState, useEffect} from "react"

export default function GenerateFollowers() {
    const [ListOfUsers, setUserList] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()

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

    return ListOfUsers
}