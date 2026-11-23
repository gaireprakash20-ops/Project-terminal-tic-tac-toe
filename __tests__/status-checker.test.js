import { isGameOver } from '../status-checker.js';

test('X wins with a full row', () => {
	const board = [
		['X', 'X', 'X'],
		['_', 'O', '_'],
		['O', '_', '_'],
	];
	expect(isGameOver(board)).toBe(true);
});

test('game continues when nobody has won', () => {
	const board = [
		['X', '_', '_'],
		['_', 'O', '_'],
		['_', '_', '_'],
	];
	expect(isGameOver(board)).toBe(false);
});
