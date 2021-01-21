import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Input, Item} from 'native-base';
import {signUpUserEmailPassword} from '../../Store/actions/auth';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const SignupInfoSecond = ({route}) => {
  const {dateRecipient} = route.params;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(true);

  const passwordGet = (text) => {
    setPassword(text);
    if (password !== '') {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  const authenticateUserSignUp = () => {
    let {getDay, getMonth, getYear} = dateRecipient;
    let user = {
      email,
      name,
      password,
      getDay,
      getMonth,
      getYear,
    };
    setEmail('');
    setPassword('');
    setName('');
    dispatch(signUpUserEmailPassword(user));
  };
  return (
    <View>
      <View style={styles.moveTextArea}>
        <Text style={styles.mainHeading}>Enter Your Email.</Text>
        <Text style={styles.subHeading}>We won't share this.</Text>
      </View>
      <View style={styles.textInputView}>
        <Item regular>
          <Input
            placeholder="Enter Your Name..."
            style={styles.textInput}
            onChangeText={(name) => {
              setName(name);
            }}
          />
        </Item>
      </View>
      <View style={styles.textInputView}>
        <Item regular>
          <Input
            placeholder="Enter Your Email..."
            style={styles.textInput}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </Item>
      </View>
      <View style={styles.textInputView}>
        <Item regular>
          <Input
            placeholder="Enter Your Password..."
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={passwordGet}
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
            title={'Sign Up'}
            onPress={authenticateUserSignUp}
            disabled={btn}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default SignupInfoSecond;

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
