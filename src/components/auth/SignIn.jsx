import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Login from '../../../assets/images/login.png';
import useSignIn from '../../hooks/useSignIn';

export default function SignInComponent() {
  // hooks 정의
  const [armynumber, setArmynumber] = useState();
  const [password, setPassword] = useState();
  const [signIn] = useSignIn();
  const onSignInPress = async () => {
    try {
      await signIn({ armynumber, password });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.ttl_area}>
          <Text style={styles.ttl}>쉼, 표</Text>
          <Text style={styles.desc}>당신의 군생활에 쉼표를</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.login_container}>
        <View style={styles.input_container}>
          <TextInput
            value={armynumber}
            onChangeText={setArmynumber}
            placeholder="군번"
            style={styles.input}
            autoFocus
          />
        </View>
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <TouchableOpacity title="로그인" onPress={onSignInPress}>
          <Text style={styles.loginbtn}>
            로그인 <Image source={Login}></Image>
          </Text>
        </TouchableOpacity>
        <Link href="/login/signup">
          <Text style={styles.loginLink}>아직 계정이 없으신가요?</Text>
        </Link>
      </View>
      <Text style={{ color: 'green', marginTop: 100 }}>
        Copyright 2023 국방부
      </Text>
    </View>
  );
}

const shadowBox = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  ttl_area: {
    marginBottom: 150,
    textAlign: 'center',
  },
  ttl: {
    // font-family:'Single Day', sans-serif;
    fontSize: 64,
    color: '#007120',
  },
  desc: {
    color: '#007120',
  },
  login_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  input_container: {
    width: '100%',
    textAlign: 'left',
  },
  label: {
    fontWeight: 700,
  },
  input: {
    ...shadowBox,
    borderColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    margin: 15,
    height: 40,
    width: 300,
  },
  loginbtn: {
    ...shadowBox,
    width: 70,
    color: '#007120',
  },
  loginLink: {
    ...shadowBox,
    textDecorationLine: 'underline',
  },
});
