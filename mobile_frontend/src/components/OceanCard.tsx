import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useOceanTheme } from '../theme/ThemeProvider';

/**
 * PUBLIC_INTERFACE
 * OceanCard
 * Reusable card surface for grouping UI content.
 * Props:
 *  - style?: style override
 *  - children: React.ReactNode
 */
export const OceanCard: React.FC<{ style?: ViewStyle; children: React.ReactNode }> = ({ style, children }) => {
  const theme = useOceanTheme();
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.primary,
          borderColor: theme.colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
});
