import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      try {
        const userStorage = await AsyncStorage.getItem('@dataUser')
        if (userStorage) {
          setUser(JSON.parse(userStorage));
          setLoading(false);
        }
        setLoading(false);
      } catch (e) {
        Alert.alert('Erro', e, ['OK']);
      }
    }
    loadStorage();
  }, []);

  async function setUserStorage(data) {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@dataUser', jsonValue)
    } catch (e) {
      Alert.alert('Erro', e, ['OK']);
    };
  };

  async function login(dataUser) {
    try {

      setLoading(true);

      setUser({
        email: dataUser.email,
      })

      setUserStorage({
        email: dataUser.email,
      })

      setLoading(false);
      Alert.alert('Sucesso!', 'Login efetuado!', ['OK']);

    } catch (error) {
      Alert.alert('Erro', 'Tente novamente', ['OK']);
      setLoading(false);
    }
  };

  async function signOut() {
    try {
      await AsyncStorage.clear();
      setUser(null);
    } catch (e) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar sair, tente novamente mais tarde.', ['OK']);
    }
  }

  return (
    <AuthContext.Provider value={
      {
        signed: !!user,
        user,
        loading,
        login,
        signOut
      }
    }>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext)

  return context;
}

export { AuthProvider, useAuth };