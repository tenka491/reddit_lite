import uniqueKeyGen from './uniqueKeyGen';
import countFormatter from './countFormatter';

test("unigqueKeyGen length is 24", () => {
  const key = uniqueKeyGen(24);
  expect(key.length).toBe(24)
})

test("unigqueKeyGen length is 8", () => {
  const key = uniqueKeyGen(8);
  expect(key.length).toBe(8);
});

test("unigqueKeyGen length is 16", () => {
  const key = uniqueKeyGen();
  expect(key.length).toBe(16);
});

test('should format 1K', () => {
  const numberString = countFormatter('1000');
  expect(numberString).toMatch('1K');
});

test("should format 21K", () => {
  const numberString = countFormatter("21000");
  expect(numberString).toMatch("21K");
});

test("should format 2.1K", () => {
  const numberString = countFormatter("2150");
  expect(numberString).toMatch("2.1K");
});