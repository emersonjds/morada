import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Box } from "../../components/Spacing";
import { Divider, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const Bills: React.FC = () => {
  const navigation = useNavigation();

  const navigateToTickets = () => {
    navigation.navigate("Tickets");
  };

  return (
    <>
      <Box flex={1} padding={20}>
        <Box mt={20}>
          <Text variant="bodyLarge"> Escolha uma opção </Text>
        </Box>

        <Box mt={20}>
          <Divider />
        </Box>

        <TouchableOpacity
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#000",
            padding: 20,
            borderRadius: 10,
          }}
          onPress={navigateToTickets}
        >
          <Text variant="bodyLarge"> Reforma Banheiro </Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default Bills;
