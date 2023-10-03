import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
      <View style={styles.ttl_area}>
        <Text style={styles.ttl}>쉼, 표</Text>
        <Text style={styles.intro}>당신의 군생활에 한점 쉼표를</Text>
      </View>

      <TextInput
        value={armynumber}
        onChangeText={setArmynumber}
        placeholder="군번"
        style={styles.input}
      />
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        placeholder="비밀번호"
      />
      <TouchableOpacity title="로그인" onPress={onSignInPress}>
        <Text>
          로그인 <Image source={Login}></Image>
        </Text>
      </TouchableOpacity>
      <Link href="/login/signup">
        <Text>아직 계정이 없으신가요?</Text>
      </Link>

      <Text style={{ color: 'green', marginTop: 100 }}>
        Copyright 2023 국방부
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ttl_area: {
    textAlign: 'center',
  },
  ttl: {
    // font-family:'Single Day', sans-serif;
    fontSize: '64px',
    color: '#007120',
  },
  intro: {
    fontSize: 12,
    marginBottom: 100,
  },
  input: {
    borderColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    margin: 15,
    height: 40,
    width: 300,
  },
  loginlink: {
    textDecorationLine: 'underline',
  },
});
