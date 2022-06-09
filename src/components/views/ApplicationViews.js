import { Outlet, Route, Routes } from "react-router-dom"
import { JournalList } from "../journals/JournalList"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="title--main">Welcome to Inktastic</h1>
                <Outlet />
            </>
        }>

            <Route path="journals" element={ <JournalList /> } />
        </Route>
    </Routes>
}