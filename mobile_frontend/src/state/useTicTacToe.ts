import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { GameMode } from '../../App';
import type { CellValue } from '../components/Board';

type Player = 'X' | 'O';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function evaluateWinner(b: CellValue[]): Player | null {
  for (const [a, c, d] of WIN_PATTERNS) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) {
      return b[a] as Player;
    }
  }
  return null;
}

function isBoardFull(b: CellValue[]) {
  return b.every((x) => x !== null);
}

function cloneBoard(b: CellValue[]) {
  return [...b] as CellValue[];
}

function getAvailableMoves(b: CellValue[]) {
  const moves: number[] = [];
  b.forEach((v, i) => {
    if (v === null) moves.push(i);
  });
  return moves;
}

/**
 * Simple AI:
 * - If can win in one move, take it.
 * - Else if opponent can win next, block it.
 * - Else take center if available.
 * - Else take a corner if available.
 * - Else random available cell.
 */
function aiChooseMove(b: CellValue[], ai: Player, human: Player): number | null {
  const moves = getAvailableMoves(b);
  if (moves.length === 0) return null;

  // 1) Win now
  for (const m of moves) {
    const test = cloneBoard(b);
    test[m] = ai;
    if (evaluateWinner(test) === ai) return m;
  }

  // 2) Block opponent
  for (const m of moves) {
    const test = cloneBoard(b);
    test[m] = human;
    if (evaluateWinner(test) === human) return m;
  }

  // 3) Center
  if (b[4] === null) return 4;

  // 4) Corner
  const corners = [0, 2, 6, 8].filter((i) => b[i] === null);
  if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];

  // 5) Random
  return moves[Math.floor(Math.random() * moves.length)];
}

/**
 * PUBLIC_INTERFACE
 * useTicTacToe
 * Hook providing game state, actions, scoring, and AI support.
 * Params:
 *  - mode: 'PVP' | 'PVAI'
 * Returns:
 *  - board, currentPlayer, winner, isDraw, scores, makeMove, resetBoard, resetMatch, modeLabel
 */
export function useTicTacToe(mode: GameMode) {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState<{ X: number; O: number }>({ X: 0, O: 0 });

  const isAI = mode === 'PVAI';
  const aiPlayer = useRef<Player>('O');
  const humanPlayer = useRef<Player>('X');

  const modeLabel = useMemo(() => (mode === 'PVP' ? 'Player vs Player' : 'Player vs AI'), [mode]);

  const evaluate = useCallback(
    (b: CellValue[]) => {
      const w = evaluateWinner(b);
      if (w) {
        setWinner(w);
        setScores((s) => ({ ...s, [w]: s[w] + 1 }));
        setIsDraw(false);
        return;
      }
      if (isBoardFull(b)) {
        setIsDraw(true);
        setWinner(null);
      }
    },
    []
  );

  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  }, []);

  const resetMatch = useCallback(() => {
    setScores({ X: 0, O: 0 });
    resetBoard();
  }, [resetBoard]);

  const makeMove = useCallback(
    (index: number) => {
      if (winner || isDraw) return;
      setBoard((prev) => {
        if (prev[index] !== null) return prev;
        const next = cloneBoard(prev);
        next[index] = currentPlayer;
        return next;
      });
      setCurrentPlayer((p) => (p === 'X' ? 'O' : 'X'));
    },
    [currentPlayer, winner, isDraw]
  );

  // Evaluate board for winner/draw when it changes
  useEffect(() => {
    evaluate(board);
  }, [board, evaluate]);

  // AI move if it's AI's turn and the game is not over
  useEffect(() => {
    if (!isAI) return;
    if (winner || isDraw) return;
    if (currentPlayer !== aiPlayer.current) return;

    const timeout = setTimeout(() => {
      const move = aiChooseMove(board, aiPlayer.current, humanPlayer.current);
      if (move !== null) {
        setBoard((prev) => {
          if (prev[move] !== null) return prev;
          const next = cloneBoard(prev);
          next[move] = aiPlayer.current;
          return next;
        });
        setCurrentPlayer(humanPlayer.current);
      }
    }, 350); // small delay for UX

    return () => clearTimeout(timeout);
  }, [isAI, currentPlayer, board, winner, isDraw]);

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    scores,
    makeMove,
    resetBoard,
    resetMatch,
    modeLabel,
  };
}
