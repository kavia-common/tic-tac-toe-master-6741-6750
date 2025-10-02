import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOceanTheme } from '../theme/ThemeProvider';

/**
 * PUBLIC_INTERFACE
 * ScoreHeader
 * Displays X and O scores and highlights the current player.
 * Props:
 *  - xScore: number
 *  - oScore: number
 *  - currentPlayer: 'X' | 'O'
 */
export const ScoreHeader: React.FC<{
  xScore: number;
  oScore: number;
  currentPlayer: 'X' | 'O';
}> = ({ xScore, oScore, currentPlayer }) => {
  const theme = useOceanTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: 'rgba(37,99,235,0.08)' }]}>
        <Text style={[styles.label, { color: theme.colors.primary }]}>Player X</Text>
        <Text style={[styles.score, { color: theme.colors.primary }]}>{xScore}</Text>
        {currentPlayer === 'X' ? (
          <Text style={[styles.turn, { color: theme.colors.primary }]}>Your turn</Text>
        ) : null}
      </View>

      <View style={{ width: 12 }} />

      <View style={[styles.card, { backgroundColor: 'rgba(245,158,11,0.10)' }]}>
        <Text style={[styles.label, { color: theme.colors.secondary }]}>Player O</Text>
        <Text style={[styles.score, { color: theme.colors.secondary }]}>{oScore}</Text>
        {currentPlayer === 'O' ? (
          <Text style={[styles.turn, { color: theme.colors.secondary }]}>Your turn</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  card: {
    flex: 1,
    minHeight: 84,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  score: { fontSize: 28, fontWeight: '900', marginTop: 4 },
  turn: { fontSize: 12, fontWeight: '700', marginTop: 4 },
});
