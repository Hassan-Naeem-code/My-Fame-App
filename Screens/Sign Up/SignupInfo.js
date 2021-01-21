import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ToastAndroid} from 'react-native';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';

const SignupInfo = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [btn, setBtn] = useState(true);
  const getDate = () => {
    let dateRightNow = new Date().getTime();
    let dateGet = date.getTime();
    let getDay = date.getDay();
    let getMonth = date.getMonth();
    let getYear = date.getFullYear();
    let sendDate = {
      getDay,
      getMonth,
      getYear,
    };
    if (dateGet < dateRightNow) {
      navigation.navigate('SignupInfoSecond', {dateRecipient: sendDate});
    } else {
      ToastAndroid.show('Please Pick DOB...', 2000);
    }
  };
  return (
    <View>
      <View style={styles.moveTextArea}>
        <Text style={styles.mainHeading}>When is your birthday?</Text>
        <Text style={styles.subHeading}>We won't share this.</Text>
      </View>
      <View style={styles.datePicker}>
        <DatePicker
          date={date}
          onDateChange={(date) => {
            setDate(date);
            setBtn(false);
          }}
          androidVariant={'nativeAndroid'}
          mode={'date'}
        />
        <View style={styles.nextBtn}>
          <LinearGradient colors={btn ? ['#43D4FF', '#38ABFD', '#2974FA'] : ['#A8A8A8','#B0B0B0','#BEBEBE']}>
            <Button title={'Next'} onPress={getDate} disabled={btn} />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SignupInfo;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 13,
    fontWeight: '800',
  },
  moveTextArea: {
    marginTop: 10,
    marginLeft: 17,
  },
  datePicker: {
    alignItems: 'center',
  },
  nextBtn: {
    width: '100%',
    color: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 11,
    paddingBottom: 11,
  },
});
