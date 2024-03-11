import { createContext, useReducer } from 'react'

export const TestsContext = createContext()

export const testsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TESTS':   // applies to all _s
            return {
                tests: action.payload   // returns all the _s with a new state
            }
        case 'CREATE_TEST': 
            return {
                tests: [action.payload, ...state.tests]
            }
        case 'DELETE_TEST':
            return {
                tests: state.tests.filter((t) => t._id !== action.payload._id)
            }
        // case 'UPDATE_TEST':
        //     return {
        //         tests: state.tests.map(test => test.id === action.payload.id ? action.payload : test)
        //     }
        // case 'SEARCH_TESTS':
        //     return {
        //         tests: state.tests.filter(test => test.name.toLowerCase().includes(action.payload.toLowerCase()))
        //     }
        // case 'SORT_TESTS':
        //     return {
        //         tests: state.tests.sort((a, b) => action.payload === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        //     }

        default:        // returns the state as is
            return state
    }
}

export const TestsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(testsReducer, {    // useReducer is a hook that allows for custom state logic | similar to useState 
        tests: null
    })

    return (    
        <TestsContext.Provider value={{...state, dispatch}}     /*applies context changes to the components that it is wrapping*/>
            { children      /* refers to the entire application  under index.js*/}
        </TestsContext.Provider>
    )
}