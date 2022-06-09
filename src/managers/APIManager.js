export const getJournals = (uid) => {
    return fetch(`http://localhost:8088/journals?userId=${uid}`)
        .then(response => response.json())
}