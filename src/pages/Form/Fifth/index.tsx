import React, { FC, useState } from "react";
import { Box } from "../../../components/Spacing";
import { Text, TextInput } from "react-native-paper";

const Fifth: FC = () => {
  const [text, setText] = useState("R$ 200,00");
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
          <Text variant="bodyLarge">
            Informe um valor entre R$ 180,00 e R$ 350,00{" "}
          </Text>
        </Box>

        <Box mt={20}>
          <TextInput
            label="Valor de parcela informado"
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

export default Fifth;
