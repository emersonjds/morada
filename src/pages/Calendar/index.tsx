import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { Box } from "../../components/Spacing";
import { Text } from "react-native-paper";

const CalendarPage: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState([
    "2023-06-24",
    "2023-06-25",
    "2023-06-26",
    "2023-06-27",
    "2023-06-28",
    "2023-06-29",
  ]);

  const onDayPress = (day) => {
    const selectedDate = day.dateString;

    console.log(selectedDate);

    let updatedDates = [...selectedDates];

    // Check if the selected date is already in the array
    const index = updatedDates.indexOf(selectedDate);
    if (index !== -1) {
      // Date already exists, remove it
      updatedDates.splice(index, 1);
    } else {
      // Date doesn't exist, add it
      updatedDates.push(selectedDate);
    }

    setSelectedDates(updatedDates);
  };

  const getMarkedDates = (selectedDates) => {
    const markedDates = {};

    // Loop through the selected dates array and mark each date
    selectedDates.forEach((date) => {
      markedDates[date] = {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#007bff",
        selectedTextColor: "#ffffff",
      };
    });

    return markedDates;
  };

  return (
    <>
      <Box mt={35} flex={1} bg={"#fff"}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={getMarkedDates(selectedDates)}
        />
        <Box p={20}>
          <Text variant="bodyLarge">
            Sua reforma foi{" "}
            {
              <Text
                style={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: 16,
                }}
              >
                Aprovada
              </Text>
            }{" "}
            e a data inicial dela esta para o dia 24/03/2023, com previsão de
            termino em 10 dias.
          </Text>
        </Box>

        <Box p={20}>
          <Text
            variant="bodyLarge"
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Acompanhe o andamento da sua obra e nos informe caso aconteça algum
            tipo de problema
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CalendarPage;
