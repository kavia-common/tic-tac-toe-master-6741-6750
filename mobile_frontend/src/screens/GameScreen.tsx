import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { GameMode } from '../../App';
import { useTicTacToe } from '../state/useTicTacToe';
import { ScoreHeader } from '../components/ScoreHeader';
import { Board } from '../components/Board';
import { Controls } from '../components/Controls';
import { useOceanTheme } from '../theme/ThemeProvider';

/**
 * PUBLIC_INTERFACE
 * GameScreen
 * Displays the Tic Tac Toe game for either Player vs Player or Player vs AI modes.
 * Props:
 *  - mode: Current game mode ('PVP' or 'PVAI')
 *  - onBack: Callback to return to the home screen
 * Returns:
 *  - A fully interactive game screen with score tracking, board, and controls
 */
export const GameScreen: React.FC<{ mode: GameMode; onBack: () => void }> = ({ mode, onBack }) => {
  const theme = useOceanTheme();
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    scores,
    makeMove,
    resetBoard,
    resetMatch,
    modeLabel,
  } = useTicTacToe(mode);

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <View style={styles.headerRow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to Home"
          onPress={onBack}
          style={({ pressed }) => [
            styles.backBtn,
            {
              backgroundColor: pressed ? theme.colors.primaryDim : theme.colors.surface,
              shadowColor: theme.colors.primary,
            },
          ]}
        >
          <Text style={[styles.backTxt, { color: theme.colors.primary }]}>‹ Home</Text>
        </Pressable>

        <View style={styles.modePill}>
          <Text style={[styles.modeText, { color: theme.colors.primary }]}>
            {modeLabel}
          </Text>
        </View>
      </View>

      <ScoreHeader
        xScore={scores.X}
        oScore={scores.O}
        currentPlayer={currentPlayer}
      />

      <View style={styles.boardWrapper}>
        <Board
          board={board}
          onMove={makeMove}
          disabled={!!winner || isDraw}
        />
      </View>

      <View style={styles.statusWrapper}>
        {winner ? (
          <Text style={[styles.statusText, { color: theme.colors.secondary }]}>
            {winner === 'X' ? 'X' : 'O'} wins!
          </Text>
        ) : isDraw ? (
          <Text style={[styles.statusText, { color: theme.colors.text }]}>
            It’s a draw.
          </Text>
        ) : (
          <Text style={[styles.statusText, { color: theme.colors.textSubtle }]}>
            Turn: {currentPlayer}
          </Text>
        )}
      </View>

      <Controls
        onNewRound={resetBoard}
        onResetMatch={resetMatch}
        primaryDisabled={false}
        secondaryDisabled={false}
      />
      <View style={{ height: 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  headerRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  backTxt: {
    fontSize: 16,
    fontWeight: '600',
  },
  modePill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(37, 99, 235, 0.08)',
  },
  modeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  boardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusWrapper: {
    alignItems: 'center',
    marginTop: 6,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
