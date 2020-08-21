const forEach = require("./index");

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

test("此 mock 函数被调用了两次", () => {
  // console.log(mockCallback.mock);
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("第一次调用函数时的第一个参数是 0", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test("第二次调用函数时的第一个参数是 1", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test("第一次函数调用的返回值是 42", () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test("第二次函数调用的返回值是 43", () => {
  expect(mockCallback.mock.results[1].value).toBe(43);
});
