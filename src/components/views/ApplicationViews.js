import { Outlet, Route, Routes } from "react-router-dom"
import { JournalList } from "../journals/JournalList"
import { NewJournal } from "../journals/NewJournal"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="title--main">Welcome to Inktastic</h1>
                <Outlet />
            </>
        }>

            <Route path="journals" element={ <JournalList /> } />
            <Route path="journals/new" element={ <NewJournal /> } />
        </Route>
    </Routes>
}