import { createContext, ReactNode } from 'react';

type ContextProviderProps = {
    children: ReactNode;
}

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Taynan',
    age: 27
}

export const Context = createContext<ContextType>(initialState);


//Provider => É um componente de bolho, e dentro dessa bolha eu consigo colocar os componentes que eu quiser, ou uma tela, e até mesmo uma aplicação inteira.

export const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}