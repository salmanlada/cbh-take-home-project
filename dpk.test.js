const { deterministicPartitionKey } = require("./dpk");
const obj = {};
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash, when given input", () => {
    const trivialKey = deterministicPartitionKey(obj);
    expect(typeof trivialKey).toBe("string");
  });
});

let obj2 = {partitionKey: 1111};

describe("deterministicPartitionKey", () => {
  it("Returns the hash, when given input has partition key", () => {
    const trivialKey = deterministicPartitionKey(obj2);
    expect(typeof trivialKey).toBe("string");
  });
});