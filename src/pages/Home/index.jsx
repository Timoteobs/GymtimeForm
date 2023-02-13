import React from "react";
import { Box, Input, Button, ScrollView, Text, Radio } from "native-base";
import { useAuth } from "../../contexs/auth";

const questions = [
  {
    title: "Preguta 1",
    response: "",
    type: "text",
  },
  {
    title: "Preguta 2",
    response: "",
    type: "boolean",
  },
  {
    title: "Preguta 3",
    response: "",
    type: "text",
  },
  {
    title: "Preguta 4",
    type: "text",
    response: "",
  },
  {
    title: "Preguta 5",
    response: "",
    type: "text",
  },
  {
    title: "Preguta 6",
    response: "",
    type: "text",
  },
  {
    title: "Preguta 7",
    response: "",
    type: "text",
  },
];

const Home = () => {
  const { user } = useAuth();

  const toRespond = () => {
    alert("Resposta enviada!");
  };

  return (
    <ScrollView>
      <Box
        alignItems="center"
        justifyContent="center"
        flex={1}
        pl={5}
        pr={5}
        mt={50}
        mb={50}
      >
        <Box w="100%" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" bold>
            Bem vindo, {user.email}
          </Text>
          <Text fontSize="lg" mt={10}>
            Abaixo temos algumas perguntas referente a sua rotina de atividade
            fisica
          </Text>
          {questions.map((question, index) => (
            <Box key={index} mt={5} w="100%">
              {question.type === "text" && (
                <Box w="100%" justifyContent="flex-start">
                  <Text fontSize="lg" w="100%">
                    {question.title}
                  </Text>
                  <Input
                    size="lg"
                    placeholder="Resposta"
                    w="100%"
                    mt={2}
                    type="text"
                  />
                </Box>
              )}
              {question.type === "boolean" && (
                <Box w="100%">
                  <Text fontSize="lg" w="100%">
                    {question.title}
                  </Text>
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                  >
                    <Radio value="one" my={1}>
                      Verdadeiro
                    </Radio>
                    <Radio value="two" my={1}>
                      Falso
                    </Radio>
                  </Radio.Group>
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Button bg="primary.700" w="100%" mt={2} onPress={toRespond}>
          Responder
        </Button>
      </Box>
    </ScrollView>
  );
};

export default Home;
