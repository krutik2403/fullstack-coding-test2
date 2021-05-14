import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase'
import Cookie from 'js-cookie'

const authContext = createContext()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
        return response.user
      })
  }

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Cookie.set('userId', user.uid, { expires: 1 })
        setUser(user)
      } else {
        setUser(false)
        Cookie.remove('userId')
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user: user,
    userId: user && user.uid,
    signin,
    signup,
    signout,
  }
}
