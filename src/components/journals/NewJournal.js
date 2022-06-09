import { useEffect, useState } from "react"
import { createJournal, createJournalTopic } from "../../managers/APIManager"

export const NewJournal = () => {
    /*
            TODO: Add the correct default properties to the
            initial state object
        */
    const [journal, updateJournalState] = useState({
        manufacturer: "",
        datePurchased: "",
        size: ""
    })
    const [topics, setTopics] = useState([])
    const [chosenTopics, updateChosenTopics] = useState(new Set())


    useEffect(() => {
        fetch(`http://localhost:8088/topics`)
            .then(response => response.json())
            .then((allTopics) => {
                setTopics(allTopics)
            })
    }, [])



    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const userId = JSON.parse(localStorage.getItem("ink_user")).id

        const newJournalObject = {
            manufacturer: journal.manufacturer,
            size: journal.size,
            datePurchased: journal.datePurchased,
            userId: userId
        }

        createJournal(newJournalObject)
            .then((newJournal) => {
                // After creation complete, snag `id` of new object
                const journalId = newJournal.id

                // Use journal `id` to create n JournalTopics entries
                const topicsArray = Array.from(chosenTopics)

                for (const topic of topicsArray) {
                    createJournalTopic(journalId, topic)
                }
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Journal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Manufacturer:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={journal.manufacturer}
                        onChange={(e) => {
                            const copyOfState = { ...journal }
                            copyOfState.manufacturer = e.target.value
                            updateJournalState(copyOfState)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Size:</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        value={journal.size}
                        onChange={(e) => {
                            const copyOfState = { ...journal }
                            copyOfState.size = e.target.value
                            updateJournalState(copyOfState)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Size:</label>
                    <input
                        required
                        type="date"
                        className="form-control"
                        value={journal.datePurchased}
                        onChange={(e) => {
                            const copyOfState = { ...journal }
                            copyOfState.datePurchased = e.target.value
                            updateJournalState(copyOfState)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    {
                        topics.map(
                            topic => <>
                                <input onClick={
                                    (evt) => {
                                        const copy = new Set(chosenTopics)
                                        const [, id] = evt.target.id.split("--")
                                        if (evt.target.checked) {
                                            copy.add(parseInt(id))
                                        }
                                        else {
                                            copy.delete(parseInt(id))
                                        }

                                        updateChosenTopics(copy)
                                    }
                                }
                                    type="checkbox" id={`topic--${topic.id}`} />
                                {topic.name}
                            </>
                        )
                    }
                </div>
            </fieldset>
            <button
                onClick={handleSaveButtonClick}
                className="btn btn-primary">
                Save Journal
            </button>
        </form>
    )
}