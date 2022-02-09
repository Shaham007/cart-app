import React, {useState, createContext, useContext } from 'react';
import Data from './Data';



const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ cart , setCart] = useState(Data);

    return (
        <AppContext.Provider value={{cart}}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider};