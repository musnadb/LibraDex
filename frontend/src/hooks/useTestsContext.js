import { TestsContext } from '../context/TestContext'
import { useContext } from 'react'

export const useTestsContext = () => {
    const context = useContext(TestsContext)

    if (!context) {     // checks to see if the context is within the scope set in index.js
        throw Error('use_Context must be used inside a _sContextProvider')
    }

    return context      // returns the value of the _Context which was provided in _Context.Provider component
}
