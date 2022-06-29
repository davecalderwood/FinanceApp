import { createContext } from "react";

// React Context allows data to be passed between any components in the application WITHOUT the use of props
// This is used for SITE-WIDE state, such as "is the user logged in or not?"
// Without a Logged In Context, you would have to check everywhere if the user was logged in and would have to pass that anywhere you passed props
// ie. behind the scenes data transfer

// Look at App.js AND Header.js to see how it is set up

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});