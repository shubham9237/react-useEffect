import React, { useEffect, useState } from "react";
const authState = {
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
}
const AuthContext = React.createContext(authState);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    
    useEffect(() => {  // it will run after component is rerenderred but only if dependencies are changed
        const loggedIn = localStorage.getItem('isLoggedIn');
        console.log(loggedIn);
        if (loggedIn === '1') {
            setIsloggedIn(true);
        }
    }, []); // dependencies array

    const logoutHandler = () => {
        localStorage.clear();
        setIsloggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsloggedIn(true);
    }
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;