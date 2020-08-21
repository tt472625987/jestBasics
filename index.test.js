beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

test("toBeTruthy", () => {
  console.log("toBeTruthy");
  expect("toBeTruthy").toBeTruthy();
});

// 作用域
describe("describe", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    console.log("describe:beforeEach");
  });

  test("3>2", () => {
    console.log("describe:toBeTruthy");
    expect(3 > 2).toBe(true);
  });

  afterEach(() => {
    console.log("describe:afterEach");
  });
});

// beforeAll(() => console.log("1 - beforeAll"));
// afterAll(() => console.log("1 - afterAll"));
// beforeEach(() => console.log("1 - beforeEach"));
// afterEach(() => console.log("1 - afterEach"));
// test("", () => console.log("1 - test"));

// describe("Scoped / Nested block", () => {
//   beforeAll(() => console.log("2 - beforeAll"));
//   afterAll(() => console.log("2 - afterAll"));
//   beforeEach(() => console.log("2 - beforeEach"));
//   afterEach(() => console.log("2 - afterEach"));
//   test("", () => console.log("2 - test"));
// });

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
