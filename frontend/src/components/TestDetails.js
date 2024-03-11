import { useTestsContext } from "../hooks/useTestsContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'  // date fns formatting

const TestDetails = ({ test }) => {
    const { dispatch } = useTestsContext()

    const handleClick = async () => {       // used for sending delete requests from the web app
        const response = await fetch('/api/test/' + test._id, {
            method: 'DELETE'
        })
        const json = await response.json()      // stores the deleted document

        if (response.ok) {
            dispatch({type: 'DELETE_TEST', payload: json})
        }
    }

    return (
        <div className="test-details"   /* template for each document to display onto the home page*/>
            <h4>{test.title}</h4>
            <p><strong>var1 (Unit): </strong>{test.var1}</p>
            <p><strong>var2 (Unit): </strong>{test.var2}</p>
            <p>{formatDistanceToNow(new Date(test.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TestDetails