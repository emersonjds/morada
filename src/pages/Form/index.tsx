import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";

import { View, Text } from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import StepOne from "./StepOne";
import Second from "./Second";
import { Box } from "../../components/Spacing";

const Form: FC = () => {
  const navigation = useNavigation();

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

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
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <StepOne />
            </View>
          </ProgressStep>
          <ProgressStep
            label="CPF"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <Second />
          </ProgressStep>
          <ProgressStep
            label="Renda"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Reforma"
            onNext={onNextStep}
            onPrevious={onPrevStep}
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
            onPrevious={onPrevStep}
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
