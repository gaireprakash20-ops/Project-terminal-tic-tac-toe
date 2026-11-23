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
