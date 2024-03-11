import React, { useState } from 'react';
import { useTestsContext } from '../hooks/useTestsContext'

const TestForm = () => {
    const { dispatch } = useTestsContext()

    const [title, setTitle] = useState('')
    const [var1, setVar1] = useState('')
    const [var2, setVar2] = useState('')

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {     // manages how submissions are handled
        e.preventDefault() // prevents the default action of the form being submitted

        const test = {title, var1, var2}

        const response = await fetch('/api/test', {     // fetch request to post new data
            method: 'POST',
            body: JSON.stringify(test),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {      // resets the form
            setTitle('')
            setVar1('')
            setVar2('')
            setError(null)
            setEmptyFields([])
            console.log('new test entry added', json)
            dispatch({type: 'CREATE_TEST', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}    /* form to create a new entry*/>
            <h3>Add a new Test Entry</h3>

            <label>Test Entry Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            
            <label>Test Entry Var1:</label>
            <input 
                type="number"
                onChange={(e) => setVar1(e.target.value)}
                value={var1}
                className={emptyFields.includes('var1') ? 'error' : ''}
            />

            <label>Test Entry Var2:</label>
            <input 
                type="number"
                onChange={(e) => setVar2(e.target.value)}
                value={var2}
                className={emptyFields.includes('var2') ? 'error' : ''}
            />

            <button>Add Test Entry</button>
            
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TestForm