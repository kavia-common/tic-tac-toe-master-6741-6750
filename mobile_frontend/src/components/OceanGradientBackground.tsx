import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useOceanTheme } from '../theme/ThemeProvider';

/**
 * PUBLIC_INTERFACE
 * OceanGradientBackground
 * Provides a subtle top-to-bottom gradient container for screens.
 * Usage:
 *  <OceanGradientBackground>
 *     ...content...
 *  </OceanGradientBackground>
 */
export const OceanGradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useOceanTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <LinearGradient
        colors={theme.gradients.appBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { flex: 1 },
});
