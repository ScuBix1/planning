import { Routes, useNavigate, Route } from 'react-router-dom'
import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import { Planning } from './contexts'
import Home from './pages/Home'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}
function App() {
    const navigate = useNavigate()
    return (
        <NextUIProvider navigate={navigate}>
            <Planning.PlanningContextProvider>
                <Router />
            </Planning.PlanningContextProvider>
        </NextUIProvider>
    )
}

export default App
