import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cell } from './Cell';
import { useOceanTheme } from '../theme/ThemeProvider';

export type CellValue = 'X' | 'O' | null;

/**
 * PUBLIC_INTERFACE
 * Board
 * Renders the 3x3 Tic Tac Toe board
 * Props:
 *  - board: array of 9 cells (X | O | null)
 *  - onMove(index): callback when a cell is pressed
 *  - disabled: disables interaction when true
 */
export const Board: React.FC<{
  board: CellValue[];
  onMove: (index: number) => void;
  disabled?: boolean;
}> = ({ board, onMove, disabled }) => {
  const theme = useOceanTheme();
  return (
    <View
      style={[
        styles.board,
        {
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.primary,
        },
      ]}
    >
      {board.map((v, i) => (
        <Cell
          key={i}
          value={v}
          index={i}
          onPress={onMove}
          disabled={!!disabled || v !== null}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: 320,
    height: 320,
    borderRadius: 24,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
});
