import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { GameScreen } from './src/screens/GameScreen';
import { OceanThemeProvider } from './src/theme/ThemeProvider';
import { OceanGradientBackground } from './src/components/OceanGradientBackground';

/**
 * Root App component: Hosts navigation between home and game screens.
 * Uses a simple internal state to swap screens (no external nav lib).
 */
export type GameMode = 'PVP' | 'PVAI';

export default function App() {
  const [mode, setMode] = useState<GameMode | null>(null);
  const colorScheme = useColorScheme();

  const content = useMemo(() => {
    if (!mode) {
      return <HomeScreen onSelectMode={setMode} />;
    }
    return <GameScreen mode={mode} onBack={() => setMode(null)} />;
  }, [mode]);

  return (
    <OceanThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <OceanGradientBackground>
          <View style={{ flex: 1 }}>
            {content}
          </View>
        </OceanGradientBackground>
      </SafeAreaView>
    </OceanThemeProvider>
  );
}
