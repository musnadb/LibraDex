import { TestsContext } from '../context/TestContext'
import { useContext } from 'react'

export const useTestsContext = () => {
    const context = useContext(TestsContext)

    if (!context) {
        throw Error('useTestsContext must be inside a TestsContextProvider')
    }

    return context
}