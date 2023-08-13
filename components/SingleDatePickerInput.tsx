import React from 'react';
import {View} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TextInputWithIcon from './TextInputWithIcon';

type SingleDatePickerInputProps = {
  title: string;
  icon: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export default function SingleDatePickerInput({
  title,
  icon,
  date,
  setDate,
}: SingleDatePickerInputProps) {
  // const [date, setDate] = React.useState<Date>();
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
  return (
    <SafeAreaProvider>
      <View>
        <TextInputWithIcon
          label={title}
          value={formattedDate}
          icon={icon}
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
