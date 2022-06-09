import { useEffect, useState } from "react"
import { getJournals } from "../../managers/APIManager"

export const JournalList = () => {
    const [journals, setJournals] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("ink_user"))
        getJournals(user.id).then(setJournals)
    }, [])

    return <>
        <h2>Your Journals</h2>

        {
            journals.map(
                journal => <section className="journal">
                    <div className="journal__size">{journal.size}</div>
                    <div className="journal__manufacturer">{journal.manufacturer}</div>
                    <div className="journal__date">{new Date(journal.datePurchased).toLocaleDateString()}</div>
                </section>
            )
        }
    </>
}