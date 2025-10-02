import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { GameMode } from '../../App';
import { useOceanTheme } from '../theme/ThemeProvider';
import { OceanCard } from '../components/OceanCard';

/**
 * PUBLIC_INTERFACE
 * HomeScreen
 * Onboarding screen for selecting game mode.
 * Props:
 *  - onSelectMode(mode): callback to start a game with the selected mode
 */
export const HomeScreen: React.FC<{ onSelectMode: (m: GameMode) => void }> = ({ onSelectMode }) => {
  const theme = useOceanTheme();

  return (
    <View style={[styles.container, { padding: 24 }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Tic Tac Toe</Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSubtle }]}>
          Ocean Professional
        </Text>
      </View>

      <OceanCard style={{ marginTop: 8 }}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
          Choose a mode
        </Text>
        <Text style={[styles.cardDesc, { color: theme.colors.textMuted }]}>
          Play locally with a friend or challenge our quick AI.
        </Text>

        <View style={{ height: 16 }} />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Start Player versus Player"
          onPress={() => onSelectMode('PVP')}
          style={({ pressed }) => [
            styles.primaryBtn,
            {
              backgroundColor: pressed ? theme.colors.primaryDim : theme.colors.primary,
              shadowColor: theme.colors.primary,
            },
          ]}
        >
          <Text style={styles.primaryBtnText}>Player vs Player</Text>
        </Pressable>

        <View style={{ height: 12 }} />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Start Player versus AI"
          onPress={() => onSelectMode('PVAI')}
          style={({ pressed }) => [
            styles.secondaryBtn,
            {
              backgroundColor: pressed ? theme.colors.surface : theme.colors.surface,
              borderColor: theme.colors.primary,
              shadowColor: theme.colors.primary,
            },
          ]}
        >
          <Text style={[styles.secondaryBtnText, { color: theme.colors.primary }]}>Player vs AI</Text>
        </Pressable>
      </OceanCard>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.colors.textMuted }]}>
          Clean, minimalist, modern design with subtle depth.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 8 },
  title: { fontSize: 34, fontWeight: '800', letterSpacing: 0.5 },
  subtitle: { fontSize: 14, fontWeight: '600' },
  cardTitle: { fontSize: 18, fontWeight: '700' },
  cardDesc: { marginTop: 6, fontSize: 14, lineHeight: 18 },
  primaryBtn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowOpacity: 0.14,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  secondaryBtn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  secondaryBtnText: { fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
  footer: { alignItems: 'center', marginTop: 20 },
  footerText: { fontSize: 12, fontWeight: '500' },
});
