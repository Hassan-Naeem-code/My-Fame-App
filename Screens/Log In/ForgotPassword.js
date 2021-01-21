import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ToastAndroid} from 'react-native';
import {Input, Item} from 'native-base';
import {forgotPasswordEmailSubmission} from '../../Store/actions/auth';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const LoginInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [btn, setBtn] = useState(true);

  const getEmail = (text) => {
    setEmail(text);
    if (email !== '') {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };
  const sendEmailToUser = () => {
    if (email !== '') {
      dispatch(forgotPasswordEmailSubmission(email));
      setEmail('');
      navigation.navigate('LoginInfo');
    } else {
      ToastAndroid.show('Please Enter Your Email First', 2000);
    }
  };
  return (
    <View>
      <View style={styles.moveTextArea}>
        <Text style={styles.mainHeading}>
          Enter Your Email To Recieve An Email.
        </Text>
        <Text style={styles.subHeading}>We won't share this info...</Text>
      </View>
      <View style={styles.textInputView}>
        <Item regular>
          <Input
            placeholder="Enter Your Email..."
            style={styles.textInput}
            onChangeText={getEmail}
          />
        </Item>
      </View>
      <View style={styles.nextBtn}>
        <LinearGradient
          colors={
            btn
              ? ['#43D4FF', '#38ABFD', '#2974FA']
              : ['#A8A8A8', '#B0B0B0', '#BEBEBE']
          }>
          <Button
            title={'Send Email'}
            color="rgb(254,44,85)"
            onPress={sendEmailToUser}
            disabled={btn}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default LoginInfo;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 22,
    fontWeight: '700',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '800',
  },
  moveTextArea: {
    marginTop: 10,
    marginLeft: 17,
  },
  textInputView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  textPartArea: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
  },
  nextBtn: {
    width: '100%',
    color: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 11,
    paddingBottom: 11,
  },
  forgotPassword: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  textInput: {
    width: '100%',
  },
});
