import React, { useMemo } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useOceanTheme } from '../theme/ThemeProvider';
import type { CellValue } from './Board';

/**
 * PUBLIC_INTERFACE
 * Cell
 * A single square representing a cell on the board.
 * Props:
 *  - value: 'X' | 'O' | null
 *  - index: number index (0-8)
 *  - onPress(index): callback when pressed
 *  - disabled: disables interaction when true
 */
export const Cell: React.FC<{
  value: CellValue;
  index: number;
  onPress: (index: number) => void;
  disabled?: boolean;
}> = ({ value, index, onPress, disabled }) => {
  const theme = useOceanTheme();
  const color = useMemo(() => {
    if (value === 'X') return theme.colors.primary;
    if (value === 'O') return theme.colors.secondary;
    return theme.colors.textMuted;
  }, [value, theme]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Cell ${index + 1}`}
      onPress={() => onPress(index)}
      disabled={disabled}
      style={({ pressed }) => [
        styles.cell,
        {
          backgroundColor: theme.colors.surfaceElevated,
          borderColor: theme.colors.border,
          transform: [{ scale: pressed ? 0.98 : 1 }],
          shadowColor: theme.colors.primary,
          opacity: disabled ? 0.95 : 1,
        },
      ]}
    >
      <View style={styles.contentCenter}>
        <Text style={[styles.valueText, { color }]}>{value ?? ''}</Text>
      </View>
    </Pressable>
  );
};

const size = (320 - 20) / 3; // board width - padding, divided by 3

const styles = StyleSheet.create({
  cell: {
    width: size,
    height: size,
    margin: 3,
    borderRadius: 16,
    borderWidth: 1,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  contentCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});
