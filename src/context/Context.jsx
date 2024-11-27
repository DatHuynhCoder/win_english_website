import React, {useState, createContext} from 'react'

const ContextStore = createContext()
const ContextProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  return (
    <ContextStore.Provider value={{
      accessToken, setAccessToken,
      refreshToken, setRefreshToken
    }}>
      {children}
    </ContextStore.Provider>
  )
}

export {ContextStore, ContextProvider}