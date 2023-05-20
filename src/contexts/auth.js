import React, {createContext, useState} from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});



function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

async function signIn(email, password) {
  try {
    const response = await api.post('login', {
      email,
      password
    })
    setUser({
      token: response.data.token,
      email: response.data.email,
    });
    console.log(user);
    navigation.navigate("Home")
  } catch (error) {
     //console.log(error?.response?.data?.message);
  }
}


  return(
    <AuthContext.Provider value={{user, signIn}}>
      {children}
    </AuthContext.Provider> 
  )
}

export default AuthProvider;