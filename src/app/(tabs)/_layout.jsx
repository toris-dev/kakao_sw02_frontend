import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="board" options={{ headerShown: false }} />
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="counselor" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
