import React, {useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const UserData = ({children}) => {

    const [user, setUser] = useState({
       name: 'Mohammed Soliman',
       email: 'm.youssef.soliman@gmail.com',
       password: 'admin',
       isAuth: false
    });

    return (
        <UserContext.Provider value={
            {user, setUser}
        }>
            {children}
        </UserContext.Provider>
    )
}

// context hook
export const useUserData = ()=>useContext(UserContext);

