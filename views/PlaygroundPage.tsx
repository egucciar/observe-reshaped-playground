'use client';

import { Text } from '../components/Text';
import { View } from '../components/View';

export function PlaygroundPage() {
  return (
    <View padding={6} gap={4} maxWidth="1200px">
      <View gap={2}>
        <Text variant="title-1">Playground</Text>
        <Text variant="body-1" color="neutral-faded">
          This is your playground - use this space to experiment and try things out!
        </Text>
      </View>
    </View>
  );
}
