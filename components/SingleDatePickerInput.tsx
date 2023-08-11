import React from 'react';
import {View} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TextInputWithIcon from './TextInputWithIcon';

export default function SingleDatePickerInput() {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: {date: React.SetStateAction<Date | undefined>}) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );

  const formattedDate = date ? date.toISOString().split('T')[0] : '';

  console.log('date', date);
  return (
    <SafeAreaProvider>
      <View>
        <TextInputWithIcon
          label="Date of Birth"
          value={formattedDate}
          icon="calendar"
          onPress={() => setOpen(true)}
        />

        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </SafeAreaProvider>
  );
}
