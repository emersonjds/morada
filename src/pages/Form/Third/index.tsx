import React, { useState } from "react";
import { View } from "react-native";
import { Box } from "../../../components/Spacing";
import { Text, TextInput } from "react-native-paper";

const Third: React.FC = () => {
  const [value, setValue] = useState("R$ 1560,00");
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
          <Text variant="bodyLarge"> Informe sua Renda </Text>
        </Box>
        <Box mt={20}>
          <TextInput
            label="Informe sua renda bruta mensal"
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => setValue(text)}
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

export default Third;
