import React, { FC, useState } from "react";
import { Box } from "../../../components/Spacing";
import { Text, Checkbox } from "react-native-paper";
import { RadioButton } from "react-native-paper";

const Fourth: FC = () => {
  const [checked, setChecked] = React.useState("first");

  const comodos = [
    {
      id: 1,
      name: "Cozinha",
      checkedName: "first",
    },
    {
      id: 2,
      name: "Sala",
      checkedName: "second",
    },
    {
      id: 3,
      name: "Quarto",
      checkedName: "third",
    },
    {
      id: 4,
      name: "Banheiro",
      checkedName: "fourth",
    },
    {
      id: 5,
      name: "Área de Serviço",
      checkedName: "fifth",
    },
  ];

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
            Informe o comodo da sua casa que precisa ser reformado{" "}
          </Text>
        </Box>
        {comodos.map((comodo) => (
          <Box
            mt={20}
            flexDirection={"row"}
            alignItems={"center"}
            key={comodo.id}
          >
            <RadioButton
              value={comodo.checkedName}
              status={checked === comodo.checkedName ? "checked" : "unchecked"}
              onPress={() => setChecked(comodo.checkedName)}
              color="#11009E"
              testID="radio-button"
              disabled={false}
            />
            <Text>{comodo.name}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Fourth;
