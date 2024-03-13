import { useEffect } from 'react'
import { useTestsContext } from '../hooks/useTestsContext'

// components
import TestDetails from '../components/TestDetails'
import TestForm from '../components/TestForm'

const Home = () => {        // home page
    const {tests, dispatch} = useTestsContext()     // 

    useEffect(() => {       // executes once rendering is finished  
        const fetchTests = async () => {    // fetch items to display in the home page
            const response = await fetch('/api/test')
            const json = await response.json()      // retrieves the collection data as json format (noted in controllers) and turns it into an array of objects

            if (response.ok) {
                dispatch({type: 'SET_TESTS', payload: json})     // updates the entire array of _ in the collection by firing the _Reducer function in _Context and passes in the action indicated in the parameters
            }
        }

        fetchTests()
    }, [dispatch]) // empty array causes the effect to run once

    return (    // home template
        <div className="home">
            <div className="tests">
                {tests && tests.map((test) => (     // maps through the collection if it isn't a null value
                    <TestDetails key={test._id} test={test} />      // template details
                ))}
            </div>

            <TestForm />
        </div>
    )
}

export default Home