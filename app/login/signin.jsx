import { Link } from 'expo-router';
import { View } from 'react-native';

export default function SignIn() {
  return (
    <View>
      <Link href="/login/signup">회원가입 </Link>
    </View>
  );
}
