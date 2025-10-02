import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useOceanTheme } from '../theme/ThemeProvider';

/**
 * PUBLIC_INTERFACE
 * Controls
 * Provides action buttons for New Round and Reset Match.
 * Props:
 *  - onNewRound(): reset current board only
 *  - onResetMatch(): reset scores and board
 *  - primaryDisabled?: boolean
 *  - secondaryDisabled?: boolean
 */
export const Controls: React.FC<{
  onNewRound: () => void;
  onResetMatch: () => void;
  primaryDisabled?: boolean;
  secondaryDisabled?: boolean;
}> = ({ onNewRound, onResetMatch, primaryDisabled, secondaryDisabled }) => {
  const theme = useOceanTheme();

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Start a new round"
        disabled={primaryDisabled}
        onPress={onNewRound}
        style={({ pressed }) => [
          styles.primaryBtn,
          {
            backgroundColor: pressed ? theme.colors.primaryDim : theme.colors.primary,
            shadowColor: theme.colors.primary,
            opacity: primaryDisabled ? 0.6 : 1,
          },
        ]}
      >
        <Text style={styles.primaryText}>New Round</Text>
      </Pressable>

      <View style={{ width: 12 }} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Reset the match"
        disabled={secondaryDisabled}
        onPress={onResetMatch}
        style={({ pressed }) => [
          styles.secondaryBtn,
          {
            backgroundColor: pressed ? theme.colors.surface : theme.colors.surface,
            borderColor: theme.colors.secondary,
            shadowColor: theme.colors.secondary,
            opacity: secondaryDisabled ? 0.6 : 1,
          },
        ]}
      >
        <Text style={[styles.secondaryText, { color: theme.colors.secondary }]}>Reset Match</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowOpacity: 0.14,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: 0.3 },
  secondaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  secondaryText: { fontSize: 16, fontWeight: '800', letterSpacing: 0.3 },
});
