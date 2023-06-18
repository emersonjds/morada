import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";

import { View, Text } from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import StepOne from "./One";
import Second from "./Second";
import { Box } from "../../components/Spacing";
import Third from "./Third";

const Form: FC = () => {
  const navigation = useNavigation();

  const onSubmitSteps = () => {
    navigation.navigate("MyTabs");
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: "#11009E",
    activeLabelColor: "#11009E",
    activeStepNumColor: "white",
    activeStepIconColor: "#11009E",
    completedStepIconColor: "#03C988",
    completedProgressBarColor: "#03C988",
    completedCheckColor: "#fff",
  };

  const buttonTextStyle = {
    color: "#686868",
    fontWeight: "bold",
  };

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  return (
    <>
      <Box flex={1} bg="#fff" mt={20}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="Nome"
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            nextBtnText="Próximo"
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <StepOne />
            </View>
          </ProgressStep>
          <ProgressStep
            label="CPF"
            nextBtnText="Próximo"
            previousBtnText="Voltar"
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <Second />
          </ProgressStep>
          <ProgressStep
            label="Renda"
            nextBtnText="Próximo"
            previousBtnText="Voltar"
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <Third />
          </ProgressStep>
          <ProgressStep
            label="Reforma"
            nextBtnText="Próximo"
            previousBtnText="Voltar"
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 4!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Valor"
            finishBtnText="Finalizar"
            previousBtnText="Voltar"
            onSubmit={onSubmitSteps}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 5!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </Box>
    </>
  );
};

export default Form;
