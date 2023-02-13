import React, { useState } from "react";
import { Box, Input, Button, Text, KeyboardAvoidingView } from "native-base";
import { Platform } from "react-native";
import { useAuth } from "../../contexs/auth";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const handleChange = (text) => setEmail(text);

  const loginUser = () => {
    if (email === "") {
      alert("Preencha os campos de login");
      return;
    }

    login({
      email,
    });
  };

  return (
    <KeyboardAvoidingView
      bg="secondary.300"
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        flex={1}
        pl={5}
        pr={5}
        mt={50}
        mb={50}
      >
        <Box alignItems="flex-start" w="100%" mb={10}>
          <Text fontSize="3xl" bold>
            Saúde
          </Text>
          <Text fontSize="3xl" bold>
            Movimento
          </Text>
          <Text fontSize="3xl" bold>
            Esporte
          </Text>
        </Box>
        <Box
          w="100%"
          alignItems="center"
          justifyContent="center"
          bg="white"
          padding={5}
          borderRadius={10}
        >
          <Text fontSize="2xl" mb={10} bold>
            Login
          </Text>
          <Input
            mx="3"
            size="lg"
            placeholder="E-mail"
            w="100%"
            value={email}
            autoCapitalize="none"
            onChangeText={handleChange}
          />
          <Input
            mx="3"
            size="lg"
            placeholder="Senha"
            w="100%"
            mt={2}
            type="password"
          />
          <Button bg="primary.700" onPress={loginUser} w="100%" mt={2}>
            Login
          </Button>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Login;
