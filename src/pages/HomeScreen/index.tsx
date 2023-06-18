import React, { useEffect, useRef } from "react";
import { Box } from "../../components/Spacing";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const HomeScreen: React.FC = () => {
  const animation = useRef(null);

  const executeAnimationOneTime = () => {
    animation.current.play();
  };

  useEffect(() => {
    setTimeout(() => {
      executeAnimationOneTime();
    }, 2500);
  }, []);

  return (
    <>
      <Box flex={1} p={20} alignItems={"center"} justifyContent={"center"}>
        <LottieView
          //   autoPlay
          ref={animation}
          style={{
            // width: 200,
            // height: 200,
            backgroundColor: "#fff",
          }}
          source={require("../../assets/success.json")}
        />

        <Box borderColor={"#000"} borderWidth={0.5} p={10} borderRadius={10}>
          <Box mt={20}>
            <Text>Tudo certo !!! </Text>
          </Box>
          <Box mt={20}>
            <Text>Esta é a melhor proposta que temos para voce</Text>
          </Box>
          <Box mt={20}>
            <Text>
              Foi aprovado o valor de R$4000,00 para reforma do seu "banheiro" .
            </Text>
          </Box>
          <Box mt={20}>
            <Text>
              Um dos nossos engenheiros associados irá ao local para iniciar o
              projeto
            </Text>
          </Box>
          <Box mt={20}>
            <Text> Após validação, sua obra começa no dia seguinte</Text>
          </Box>

          <Box mt={20}>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{
                backgroundColor: "#11009E",
              }}
            >
              Aceitar proposta
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
