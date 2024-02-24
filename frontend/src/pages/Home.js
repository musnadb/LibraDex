import { useEffect, useState } from 'react'

// components
import TestDetails from '../components/TestDetails'
import TestForm from '../components/TestForm'

const Home = () => {
    const [tests, setTests] = useState(null)

    useEffect(() => {        
        const fetchTests = async () => {
            const response = await fetch('/api/test')
            const json = await response.json()

            if (response.ok) {
                setTests(json)
            }
        }

        fetchTests()
    }, []) // emptry array causes the effect to run once

    return (
        <div className="home">
            <div className="tests">
                {tests && tests.map((test) => (
                    <TestDetails key={test._id} test={test} />
                ))}
            </div>
            <TestForm />
        </div>
    )
}

export default Home