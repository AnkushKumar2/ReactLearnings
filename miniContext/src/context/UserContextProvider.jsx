import React from "react";
import UserCotext from "./UserContext";

const UserContextProvider=({children})=>{

    const [user,setUser]=React.useState(null);

return (
    <UserCotext.Provider value={{user,setUser}} >
    {children}
    </UserCotext.Provider>
)
}

export default UserContextProvider