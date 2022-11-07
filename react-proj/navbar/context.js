import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const[sdbopen,setSdbOpen] = useState(false)
    
    const pages = sublinks.map(item => {
        return item.page
    })

    return (
      <AppContext.Provider
        value={{
            pages,
            sdbopen,
            setSdbOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  // make sure use
  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };
  
