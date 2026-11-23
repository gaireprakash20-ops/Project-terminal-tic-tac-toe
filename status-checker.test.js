import { isGameOver } from './status-checker.js';

describe('isGameOver', () => {
	let logSpy;

	beforeEach(() => {
		logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	});

	afterEach(() => {
		logSpy.mockRestore();
	});

	test('returns false for an empty board', () => {
		const board = [
			['_', '_', '_'],
			['_', '_', '_'],
			['_', '_', '_'],
		];

		expect(isGameOver(board)).toBe(false);
	});
});
test('returns true when X wins on the top row', () => {
	const board = [
		['X', 'X', 'X'],
		['_', 'O', '_'],
		['O', '_', '_'],
	];

	expect(isGameOver(board)).toBe(true);
	expect(logSpy).toHaveBeenCalledWith('X has won the game!\n');
});
