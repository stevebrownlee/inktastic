import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getJournals } from "../../managers/APIManager"
import { Journal } from "./Journal"

export const JournalList = () => {
    const [journals, setJournals] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("ink_user"))
        getJournals(user.id).then(setJournals)
    }, [])

    return <>
        <h2>Your Journals</h2>

        <button onClick={() => navigate("/journals/new")}>New Journal</button>
        <article>
            {
                journals.map(
                    journal => <Journal manufacturer={journal.manufacturer}
                        size={journal.size}
                        datePurchased={journal.datePurchased}
                    />
                )
            }
        </article>
    </>
}