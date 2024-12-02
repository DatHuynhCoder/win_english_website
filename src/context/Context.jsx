import React, {useState, createContext} from 'react'

const ContextStore = createContext()
const ContextProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [userid, setUserid] = useState();
  const [ispremium,setIspremium] = useState();
  return (
    <ContextStore.Provider value={{
      accessToken, setAccessToken,
      refreshToken, setRefreshToken,
      userid, setUserid,
      ispremium,setIspremium
    }}>
      {children}
    </ContextStore.Provider>
  )
}

export {ContextStore, ContextProvider}