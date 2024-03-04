import { createContext, useReducer } from 'react'

export const TestsContext = createContext()

export const testsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TESTS':
            return {
                tests: action.payload
            }
        case 'CREATE_TEST':
            return {
                tests: [action.payload, ...state.tests]
            }
        default:
            return state
    }
}

export const TestsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(testsReducer, {
        tests: null
    })

    return (
        <TestsContext.Provider value={{...state, dispatch}}>
            { children }
        </TestsContext.Provider>
    )
}