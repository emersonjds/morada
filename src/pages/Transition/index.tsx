import React, { useEffect, useRef } from "react";
import { Box } from "../../components/Spacing";
import { Text } from "react-native-paper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Transition: React.FC = () => {
  const animation = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MyTabs");
    }, 3000);
  }, []);

  return (
    <>
      <Box
        flex={1}
        backgroundColor={"#fff"}
        alignItems={"center"}
        justifyContent={"center"}
        pl={20}
        pr={20}
      >
        <Text variant="bodyLarge">
          Aguarde, estamos procurando a melhor opção de crédito para você
        </Text>
        <Box>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#eee",
            }}
            source={require("../../assets/house.json")}
          />
        </Box>
        <Box>
          <Box mt={20}>
            <Text variant="bodyLarge">
              - Engenheiros da região para o seu projeto
            </Text>
          </Box>

          <Box mt={20}>
            <Text>- Pedreiros mais próximos</Text>
          </Box>
          <Box mt={20}>
            <Text variant="bodyLarge">
              - Solicitando material para depósitos próximos
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Transition;
