import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useSignUp from '../../hooks/useSignUp';

export default function SignUpComponent() {
  const [armynumber, setArmyNumber] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [nickname, setNikcName] = useState();
  const [role, setRole] = useState();
  const [militarybase, setMilitarybase] = useState();
  const [signUp] = useSignUp();
  const SignUpPress = async () => {
    try {
      signUp({ armynumber, password, nickname, role, militarybase });
      await AsyncStorage.setItem('token', data.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>쉼, 표</Text>
      <Text style={styles.intro}>당신의 군생활에 한점 쉼표를</Text>

      <TextInput
        value={armynumber}
        onChangeText={setArmyNumber}
        placeholder="군번"
        style={styles.input}
      />
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        placeholder="비밀번호"
      />
      <TextInput
        value={passwordCheck}
        style={styles.input}
        onChangeText={setPasswordCheck}
        placeholder="비밀번호 확인"
      />
      <TextInput
        value={nickname}
        style={styles.input}
        onChangeText={setNikcName}
        placeholder="닉네임"
      />
      <TextInput
        value={role}
        style={styles.input}
        onChangeText={setRole}
        placeholder="역할"
      />
      <TextInput
        value={militarybase}
        style={styles.input}
        onChangeText={setMilitarybase}
        placeholder="부대 번호"
      />
      <Button title="회원가입" onPress={SignUpPress} />
      <Link href="/login">이전으로</Link>
      <Text style={{ color: 'green', marginTop: 100 }}>
        Copyright 2023 국방부
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: 'green',
  },
  intro: {
    fontSize: 12,
    marginBottom: 50,
  },
  input: {
    borderColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    margin: 15,
    height: 40,
    width: 300,
  },
});
