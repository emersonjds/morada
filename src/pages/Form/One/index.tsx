import React, { FC, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Text } from "react-native-paper";
import { Box } from "../../../components/Spacing";

const StepOne: FC = () => {
  const [text, setText] = useState("Maria Clara Silva");

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Box mt={20}>
          <Text variant="bodyLarge">
            Precisamos validar algumas informações
          </Text>
        </Box>
        <Box mt={20}>
          <Text variant="bodyLarge">Informe seu nome</Text>
        </Box>
        <Box mt={20}>
          <TextInput
            label="Nome"
            value={text}
            onChangeText={(text) => setText(text)}
            style={{
              width: "100%",
              backgroundColor: "#fff",
            }}
          />
        </Box>
      </View>
    </>
  );
};

export default StepOne;
