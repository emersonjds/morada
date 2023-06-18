import React from "react";
import { Box } from "../../components/Spacing";
import { Divider, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { boletos } from "./boletos";

export const Pay: React.FC = () => {
  return (
    <>
      <Box flex={1} padding={20}>
        <Box mt={20}>
          <Text variant="bodyLarge">
            {" "}
            Aqui voce visualiza seus boletos ja pagos
          </Text>
        </Box>
        <Box mt={20}>
          <Divider />
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          {boletos.map((boleto, index) => (
            <Box
              key={index}
              mt={20}
              borderWidth={1}
              borderColor="green"
              padding={10}
              borderRadius={10}
            >
              <Text
                variant="bodyLarge"
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                R$ {boleto.valor}{" "}
              </Text>
              <Text
                style={{
                  color: "green",
                }}
              >
                Vencimento: {boleto.vencimento}
              </Text>
              <Text
                style={{
                  color: "green",
                }}
              >
                Status: {boleto.status}
              </Text>
            </Box>
          ))}
        </ScrollView>
      </Box>
    </>
  );
};

export default Pay;
