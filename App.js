
import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { StatusBar } from 'expo-status-bar';
import { THEME } from './src/theme'
import { AuthProvider } from "./src/contexs/auth";
import Routes from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="auto" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}