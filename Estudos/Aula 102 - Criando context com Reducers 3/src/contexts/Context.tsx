import React, { createContext, useReducer } from "react";
import { UserType, userInitialState, userReducer } from '../reducers/userReducer';
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
})

export const ContextProvider: React.FC<{children?: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>    
    )
}