import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: '상담사 찾기',
        }}
      />
    </Stack>
  );
}
