import React from "react";
import { ScrollView, View } from "react-native";
import { Box } from "../../components/Spacing";
import { Divider, Text } from "react-native-paper";

export const Unpay: React.FC = () => {
  return (
    <>
      <Box flex={1} padding={20}>
        <Box mt={20}>
          <Text variant="bodyLarge">
            {" "}
            Voce quitou todos os seus boletos :D{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
};
