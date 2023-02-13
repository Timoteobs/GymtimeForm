import React from "react";
import { Box, Button, Text } from "native-base";
import { useAuth } from "../../contexs/auth";

const Account = () => {
  const { signOut } = useAuth();

  return (
    <Box alignItems="center" justifyContent="center" flex={1} pl={5} pr={5}>
      <Text>Conta</Text>
      <Button bg="primary.700" onPress={signOut} w="100%" mt={2}>
        Sair
      </Button>
    </Box>
  );
};

export default Account;
