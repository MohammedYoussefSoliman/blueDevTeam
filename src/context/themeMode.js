import React, {useState, createContext, useContext } from 'react';

const ModeContext = createContext();

export const Mode = ({children}) => {
    const [mode, setMode] = useState(false);

    return (
        <ModeContext.Provider value={
            {mode, setMode}
        }>
            {children}
        </ModeContext.Provider>
    )
}

// context hook
export const useMode = ()=>useContext(ModeContext);

