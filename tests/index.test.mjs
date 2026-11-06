import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns January boundaries', () => {
  assert.deepEqual(api.monthBoundaries('2024-01-15'), { start: '2024-01-01', end: '2024-01-31' });
});
test('returns leap February boundaries', () => {
  assert.deepEqual(api.monthBoundaries('2024-02-29'), { start: '2024-02-01', end: '2024-02-29' });
});
test('returns common February boundaries', () => {
  assert.deepEqual(api.monthBoundaries('2023-02-01'), { start: '2023-02-01', end: '2023-02-28' });
});
test('handles December', () => {
  assert.deepEqual(api.monthBoundaries('2024-12-31'), { start: '2024-12-01', end: '2024-12-31' });
});
test('ignores day for month span', () => {
  assert.deepEqual(api.monthBoundaries('2024-04-02').end, '2024-04-30');
});
test('rejects invalid day', () => {
  assert.throws(() => api.monthBoundaries('2024-04-31'), RangeError);
});
