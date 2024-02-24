import React, { useState } from 'react';

const TestForm = () => {
    const [title, setTitle] = useState('')
    const [var1, setVar1] = useState('')
    const [var2, setVar2] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // prevents the default action of the form being submitted

        const test = {title, var1, var2}

        const response = await fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify(test),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setVar1('')
            setVar2('')
            setError(null)
            console.log('new test entry added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Test Entry</h3>

            <label>Test Entry Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            
            <label>Test Entry Var1:</label>
            <input 
                type="number"
                onChange={(e) => setVar1(e.target.value)}
                value={var1}
            />

            <label>Test Entry Var2:</label>
            <input 
                type="number"
                onChange={(e) => setVar2(e.target.value)}
                value={var2}
            />

            <button>Add Test Entry</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TestForm