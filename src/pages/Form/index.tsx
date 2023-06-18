import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text } from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import StepOne from "./StepOne";

const Form: React.FC = () => {
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
    activeStepIconBorderColor: "#686868",
    activeLabelColor: "#686868",
    activeStepNumColor: "white",
    activeStepIconColor: "#686868",
    completedStepIconColor: "#686868",
    completedProgressBarColor: "#686868",
    completedCheckColor: "#4bb543",
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
      <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="First"
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
            label="Second"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third"
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
            label="Fourth"
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
            label="Fifth"
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
      </View>
    </>
  );
};

export default Form;
