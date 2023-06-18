import React, { useState } from "react";
import { View } from "react-native";
import { Box } from "../../../components/Spacing";
import { Text, TextInput } from "react-native-paper";

const Second: React.FC = () => {
  const [text, setText] = useState("456.765.467-43");
  return (
    <>
      <Box
        flex={1}
        justifyContent="center"
        width="100%"
        height="100%"
        pl={20}
        pr={20}
      >
        <Box mt={20}>
          <Text variant="bodyLarge"> Infomre seu CPF </Text>
        </Box>

        <Box mt={20}>
          <TextInput
            label="CPF"
            keyboardType="numeric"
            value={text}
            onChangeText={(text) => setText(text)}
            style={{
              width: "100%",
              backgroundColor: "#fff",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Second;
