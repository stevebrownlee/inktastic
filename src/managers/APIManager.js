export const getJournals = (uid) => {
    return fetch(`http://localhost:8088/journals?userId=${uid}`)
        .then(response => response.json())
}

export const createJournalTopic = (journalId, topicId) => {
    return fetch(`http://localhost:8088/journalTopics`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            journalId: journalId,
            topicId: topicId
        })
    })
        .then(response => response.json())
}


export const createJournal = (newJournalObject) => {
    return fetch(`http://localhost:8088/journals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalObject)
    })
        .then(response => response.json())
}





