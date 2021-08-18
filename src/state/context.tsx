import { createContext, useContext, useReducer } from "react"
import { Action } from "./actions"
import { initialState, State } from "./model"
import { reducer } from "./reducer"

type Dispatch = (action: Action) => void

interface Context {
    state: State,
    dispatch: Dispatch
}

interface StateProviderProps {
    children: React.ReactNode
}

const StateContext = createContext<Context | null>(null)

const StateProvider = ({ children }: StateProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const context = { state, dispatch }

    return (
        <StateContext.Provider value={context}>
            {children}
        </StateContext.Provider>
    )
}

function useDispatchContext() {
    const context = useContext(StateContext)
    if (!context) throw new Error("useState context cannot be null and used within the StateProvider")
    return context.dispatch
}

function useStateContext() {
    const context = useContext(StateContext)
    if (!context) throw new Error("useDispatch context cannot be null and used within the StateProvider")
    return context.state
}

export { StateProvider, useDispatchContext, useStateContext }

