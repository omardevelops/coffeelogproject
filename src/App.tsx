import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
                <div className="mb-4 flex items-center gap-2">
                    <img src={viteLogo} className="h-24" alt="Vite logo" />
                    <img src={reactLogo} className="h-24" alt="React logo" />
                    <img
                        src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg"
                        alt="Tailwind CSS Logo"
                        className="h-12"
                    />
                </div>
                <h1 className="mb-4 text-3xl font-bold">
                    Vite + React + Tailwind CSS
                </h1>
                <button
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    onClick={() => setCount(count + 1)}
                >
                    Count is: {count}
                </button>
            </div>
        </div>
    )
}

export default App
