import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import * as Clipboard from 'expo-clipboard';
import { ThemedText } from "@/components/themed";
import SimpleLayout from "@/components/layouts/SimpleLayout";

export default function DonateScreen() {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'SRD'>('USD');

  const swiftInfo = {
    USD: {
      bank: 'JP Morgan Chase Bank',
      accountName: 'John Doe',
      accountNumber: '123456789',
      swiftCode: 'CHASUS33',
    },
    SRD: {
      bank: 'Republic Bank',
      accountName: 'John Doe',
      accountNumber: '123456789',
      swiftCode: 'RBNKSRPA',
    },
  }

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  }

  return (
    <SimpleLayout style={styles.container}>
      <ThemedText type="title">Donate</ThemedText>
      <ThemedText type="subtitle">Support Our App</ThemedText>
      <ThemedText style={styles.textMuted}>Your donations help us improve the app and keep it ad-free. Use the SWIFT information bellow to make a donation:</ThemedText>

      <View>
        <View style={styles.selector}>
        </View>
      </View>

      <ThemedText style={styles.textMuted}>Your donation is greatly appreciated. All proceeds go directly towards app development and subscriptions costs.</ThemedText>
    </SimpleLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  collapsible: {
    width: '100%',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 12,
  },
  textMuted: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
  },
  selector: {
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
});
