import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Text } from "react-native-paper";

const StepOne: React.FC = () => {
  const [text, setText] = React.useState("");

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          //   alignItems: "center",
          width: "100%",
          height: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Text variant="bodySmall">Informe seu nome</Text>

        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={{
            width: "100%",
          }}
        />
      </View>
    </>
  );
};

export default StepOne;
