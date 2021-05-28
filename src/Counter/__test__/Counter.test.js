import Counter from '../Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('ヘッダーは正しいテキストでレンダリングされます', () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('カウンターは最初はテキスト 0 で始まります', () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('入力は1の初期値です', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');
});
