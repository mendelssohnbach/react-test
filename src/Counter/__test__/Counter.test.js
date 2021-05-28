import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test('ヘッダーは正しいテキストでレンダリングされます', () => {
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('カウンターは最初はテキスト 0 で始まります', () => {
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('入力は1の初期値です', () => {
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('+ボタンとしてレンダリングされます', () => {
  const addBtn = getByTestId('add-btn');

  expect(addBtn.textContent).toBe('+');
});

test('-ボタンとしてレンダリングされます', () => {
  const subtractBtn = getByTestId('subtract-btn');

  expect(subtractBtn.textContent).toBe('-');
});

test('入力の値を変更する-', () => {
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  expect(inputEl.value).toBe('5');
});

test('+をクリックすると、カウンターに 1 が加算されます', () => {
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('1');
});

test('-をクリックすると、カウンターから 1 が減算されます', () => {
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('-1');
});

test('入力値を変更してから追加ボタンをクリックすると正しく動作します', () => {
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('5');
});

test('入力値を変更してから追加ボタンをクリックすると正しく動作します', () => {
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('-5');
});

test('加算してから減算すると、正しいカウンター番号が得られます', () => {
  const subtractBtnEl = getByTestId('subtract-btn');
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '10',
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('20');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('15');
});

test('カウンターには正しいclassNameが含まれています', () => {
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  const subtractBtnEl = getByTestId('subtract-btn');
  const addBtnEl = getByTestId('add-btn');

  expect(counterEl.className).toBe('');

  fireEvent.change(inputEl, {
    target: {
      value: '50',
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe('');

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe('green');

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe('green');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe('');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe('red');
});
