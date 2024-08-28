import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ThemedView } from '@/components/themed/ThemedView';
import ThemedLayout from '@/components/layouts/ThemedLayout';
import { ThemedText } from '@/components/themed/ThemedText';
import { ThemedFlatList } from '@/components/themed/ThemedFlatList';
import { sendSms } from '@/utils/mobile';
import { useMemo } from 'react';
import { Plan } from '@/constants/definitions';

type PlanItemProps = {
  item: Plan
  onPress?: (code: string) => void
}

const PlanItem = ({ item, onPress }: PlanItemProps) => {
  const emptyFunction = () => { }

  const handlePress = () => {
    if (onPress) {
      onPress(item.code)
    }
  }

  return (
    <TouchableOpacity onPress={handlePress || emptyFunction}>
      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <ThemedView>
          <MaterialIcons size={28} name='data-usage' />
        </ThemedView>
        <ThemedView style={{ flexDirection: 'column' }}>
          <ThemedText>{item.data} - {item.duration}</ThemedText>
          <ThemedText>{item.price} SRD</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  )
}

export default function MobileScreen() {
  const dataPlans: Plan[] = useMemo(() => [{
    id: 1,
    duration: '12h',
    data: '150MB',
    price: 23,
    code: 'NET 12',
  }, {
    id: 2,
    duration: '1d',
    data: '2560MB',
    price: 44,
    code: 'NET 1D',
  }, {
    id: 3,
    duration: '3d',
    data: '4608MB',
    price: 87,
    code: 'NET 3D',
  }, {
    id: 4,
    duration: '7d',
    data: '10752MB',
    price: 218,
    code: 'NET 7D',
  }, {
    id: 5,
    duration: '30d',
    data: '25600MB',
    price: 870,
    code: 'NET 30D',
  }], []);
  const onPress = (code: string) => {
    sendSms('4040', code);
  }

  return (
    <ThemedLayout
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mobile data plans</ThemedText>
        <ThemedView style={styles.list}>
          <ThemedFlatList data={dataPlans} renderItem={PlanItem} style={{ width: '100%' }} onPress={onPress} />
        </ThemedView>
      </ThemedView>
    </ThemedLayout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
});
