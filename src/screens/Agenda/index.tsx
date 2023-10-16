import React, { useState } from "react";
import DatePicker from "@react-native-community/datetimepicker";
import { View, Text, Button } from "react-native";
import ButtonComponent from "../../components/Button";
import { styles } from "./styles";

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setSelectedDate(selectedDate);
      hideDatePicker();
    }
  };

  const handleSchedule = () => {
    if (selectedDate) {
      console.log("Doação agendada para:", selectedDate);
    } else {
      console.log("Selecione uma data e hora para agendar a doação.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento de Doação de Sangue</Text>
      <Button title="Selecionar Data e Hora" onPress={showDatePicker} />

      {selectedDate && (
        <Text>Data e Hora Selecionadas: {selectedDate.toISOString()}</Text>
      )}

      {isDatePickerVisible && (
        <DatePicker
          value={selectedDate || new Date()}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <ButtonComponent text="Agendar Doação" onPress={handleSchedule} />
    </View>
  );
}
